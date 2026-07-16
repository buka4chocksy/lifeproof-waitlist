import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LifeProof Vault — Digital Legacy & Incapacity Management",
  description: "Secure, zero-knowledge, time-locked cryptographically sharded vault for blockchain wallets, passwords, and sensitive financial records. Ensure your digital legacy survives you.",
  keywords: ["digital legacy", "incapacity management", "blockchain vault", "shamir secret sharing", "inheritance", "password recovery", "crypto custody", "zero knowledge"],
  authors: [{ name: "LifeProof Security" }],
  openGraph: {
    title: "LifeProof Vault — Secure Digital Legacy & Incapacity Management",
    description: "Zero-knowledge, time-locked cryptographic sharding for your blockchain credentials and private documents. Keep your family from being locked out.",
    url: "https://lifeproof.io",
    siteName: "LifeProof",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LifeProof Vault — Secure Digital Legacy & Incapacity Management",
    description: "Zero-knowledge, time-locked cryptographic sharding for your blockchain credentials and private documents.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="bg-background text-foreground font-body min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
