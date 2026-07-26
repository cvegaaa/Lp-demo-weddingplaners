/*
# Create inquiries table (public contact form, single-tenant)

## Purpose
Stores wedding/event planning inquiries submitted from the public contact form
on the wedding-planner marketing site. There is no sign-in screen, so this is a
single-tenant, intentionally-public table: any site visitor may submit an inquiry.

## 1. New Tables
- `inquiries`
  - `id` (uuid, primary key, default gen_random_uuid())
  - `name` (text, not null) — full name of the person enquiring
  - `email` (text, not null) — contact email
  - `phone` (text, nullable) — optional contact phone
  - `event_type` (text, nullable) — e.g. "Wedding", "Corporate Event", "Private Party"
  - `event_date` (date, nullable) — preferred/expected event date
  - `guests` (integer, nullable) — estimated guest count
  - `message` (text, nullable) — free-form details
  - `status` (text, not null, default 'new') — inquiry workflow status
  - `created_at` (timestamptz, default now())

## 2. Security (RLS)
- Enable RLS on `inquiries`.
- The site has NO sign-in screen, so the frontend talks to Supabase as the
  `anon` role for its entire lifetime. Policies therefore MUST include `anon`.
- INSERT is allowed for anon + authenticated so any visitor can submit a form.
- SELECT / UPDATE / DELETE are restricted to `authenticated` only (the planner /
  site owner reads and manages inquiries after signing in to the Supabase
  dashboard). Public visitors must NOT be able to read or mutate other people's
  inquiries, so anon is intentionally excluded from those verbs.

## 3. Notes
- Re-running this migration is safe: CREATE TABLE IF NOT EXISTS, and policies
  are dropped before re-creating.
- No user_id column is used because there is no auth/users relationship here.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  event_type text,
  event_date date,
  guests integer,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Public visitors can submit inquiries (no sign-in required).
DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries"
  ON inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users (the site owner) can read inquiries.
DROP POLICY IF EXISTS "auth_select_inquiries" ON inquiries;
CREATE POLICY "auth_select_inquiries"
  ON inquiries FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update inquiry status / details.
DROP POLICY IF EXISTS "auth_update_inquiries" ON inquiries;
CREATE POLICY "auth_update_inquiries"
  ON inquiries FOR UPDATE
  TO authenticated
  USING (true) WITH CHECK (true);

-- Only authenticated users can delete inquiries.
DROP POLICY IF EXISTS "auth_delete_inquiries" ON inquiries;
CREATE POLICY "auth_delete_inquiries"
  ON inquiries FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS inquiries_created_at_idx ON inquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS inquiries_status_idx ON inquiries (status);
