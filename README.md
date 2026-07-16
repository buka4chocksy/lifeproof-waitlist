# LifeProof Waitlist Website

A classy, responsive, premium digital legacy marketing and waitlist capture landing page for **LifeProof**. Designed with restrained typography, dark mode aesthetics, dynamic grid meshes, interactive hover spots, and cryptographic flow diagrams.

---

## Technical Stack & Rationale

*   **Framework**: **Next.js (App Router, React 19)**: Chosen for instant page loads, built-in SEO capabilities, edge-optimized routing, and high-performance serverless endpoints.
*   **Styling**: **Tailwind CSS v4**: Integrates variables and custom themes directly inside CSS, ensuring faster styling passes, standard browser consistency, and lightweight layout bundles.
*   **Animations**: **Framer Motion**: Enables smooth ease-in scroll reveals, interactive buttons, responsive stepper transitions, and dynamic form swaps.
*   **Icons**: **Lucide React**: Clean, thin-line cryptographic and directory icons that maintain a professional, calm brand language.
*   **Aesthetics**:
    *   Base background: `#07080A` (deepest dark)
    *   Card styling: `#0D0F12` with a 1px border `rgba(255, 255, 255, 0.08)` and cursor-following radial glows
    *   Accent: Deep emerald vault-green (`#10B981` / `#0F5C3F`)
    *   Texture: Premium fine-grain noise overlay and active cryptographic flowing pathways in diagrams.

---

## Local Development Setup

To run the project locally, ensure you have **Node.js (>= 20.4.0)** installed.

1.  **Clone or navigate to the directory**:
    ```bash
    cd /Users/ochokoebuka/Documents/LifeProof_websit
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the local development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

4.  **Validate build compilation**:
    ```bash
    npm run build
    ```

---

## Production Integration Guide

The waitlist email form captures submissions via the serverless API route `src/app/api/waitlist/route.ts`. 

In this local MVP environment, emails are saved directly to a local JSON database in the workspace at `data/waitlist.json` while verifying honeypot traps and tracking rate limits.

To deploy this website in a live production environment, replace the local file persistence section in `src/app/api/waitlist/route.ts` with one of these production adapters:

### 1. Database Integration (e.g., Supabase / PostgreSQL)
Create a `waitlist` table:
```sql
create table waitlist (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  holds_crypto boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```
Inside `src/app/api/waitlist/route.ts`:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);

// In the POST handler:
const { error } = await supabase
  .from('waitlist')
  .insert({ email: normalizedEmail, holds_crypto: holdsCrypto });
```

### 2. Marketing / Email Integration (e.g., Resend / Mailchimp)
Send a welcome newsletter confirmation:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In the POST handler:
await resend.emails.send({
  from: 'LifeProof Vault <welcome@lifeproof.io>',
  to: normalizedEmail,
  subject: 'Welcome to the LifeProof Vault Waitlist',
  html: '<p>Thank you for requesting early access to the Vault...</p>'
});
```
# lifeproof-waitlist
# lifeproof-waitlist
