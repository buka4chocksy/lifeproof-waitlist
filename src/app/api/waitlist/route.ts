import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// Simple in-memory rate limiter
// Key: IP address, Value: Array of timestamps of recent requests
const ipRequests = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5; // 5 submissions per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipRequests.get(ip) || [];
  
  // Filter out timestamps outside the window
  const activeTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);
  
  if (activeTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  
  // Record current request
  activeTimestamps.push(now);
  ipRequests.set(ip, activeTimestamps);
  return false;
}

export async function POST(request: Request) {
  try {
    // Get client IP address
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    
    // Check rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email, holdsCrypto, username } = body;

    // 1. Honeypot check: 'username' is the honeypot field.
    // If it is filled, it's a spambot. We return a fake success response to prevent them from trying other fields.
    if (username && username.trim() !== "") {
      console.warn("Honeypot triggered by bot submission.");
      return NextResponse.json({ success: true, message: "Subscription pending verification." });
    }

    // 2. Inline server-side email validation
    if (!email || typeof email !== "string" || email.trim() === "") {
      return NextResponse.json({ error: "Email address is required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    // 3. Local Persistence in data/waitlist.json
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "waitlist.json");

    // Ensure the data directory exists
    await fs.mkdir(dataDir, { recursive: true });

    let waitlist: any[] = [];
    try {
      const fileData = await fs.readFile(filePath, "utf-8");
      waitlist = JSON.parse(fileData);
    } catch (e) {
      // File doesn't exist yet, we keep waitlist as empty array
    }

    // Check if email already exists
    const normalizedEmail = email.toLowerCase().trim();
    if (waitlist.some(entry => entry.email === normalizedEmail)) {
      return NextResponse.json(
        { error: "This email is already registered on our waitlist." },
        { status: 409 }
      );
    }

    // Safe IP representation (masking the last octet for privacy compliance e.g. GDPR/NDPR)
    const maskedIp = ip.includes(":") 
      ? ip.substring(0, ip.lastIndexOf(":")) + ":xxxx" 
      : ip.substring(0, ip.lastIndexOf(".")) + ".xxx";

    // Add entry
    const newEntry = {
      email: normalizedEmail,
      holdsCrypto: !!holdsCrypto,
      timestamp: new Date().toISOString(),
      ip: maskedIp,
    };
    waitlist.push(newEntry);

    // Save back to JSON
    await fs.writeFile(filePath, JSON.stringify(waitlist, null, 2), "utf-8");

    // ==========================================
    // INTEGRATION NOTE FOR PRODUCTION:
    // This is where you would hook up services like Supabase, Airtable, Resend, etc.
    // Example:
    // await supabase.from('waitlist').insert({ email: normalizedEmail, holds_crypto: holdsCrypto });
    // await resend.emails.send({ ... welcome email ... });
    // ==========================================

    return NextResponse.json({ success: true, message: "Welcome to the waitlist!" });
  } catch (error) {
    console.error("Waitlist API Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
