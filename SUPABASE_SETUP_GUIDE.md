# 🚀 Vercel + Supabase Setup Guide for Enrollment Form

This guide will help you set up your enrollment form to save data to Supabase and deploy on Vercel.

---

## 📋 Part 1: Supabase Setup (5 minutes)

### Step 1: Create Supabase Account & Project

1. Go to [https://supabase.com](https://supabase.com)
2. Click **"Start your project"** and sign up (GitHub login recommended)
3. Click **"New Project"**
4. Fill in:
    - **Name**: `web-bridge-pro` (or any name)
    - **Database Password**: Create a strong password (save it!)
    - **Region**: Choose closest to your users
    - **Pricing Plan**: Free (perfect for starting)
5. Click **"Create new project"** (takes ~2 minutes to set up)

---

### Step 2: Create the Enrollments Table

1. In your Supabase project dashboard, click **"Table Editor"** in the left sidebar
2. Click **"Create a new table"**
3. Use these settings:

**Table Name:** `enrollments`

**Columns to add:**

| Column Name           | Type          | Default Value       | Extra                       |
| --------------------- | ------------- | ------------------- | --------------------------- |
| `id`                  | `uuid`        | `gen_random_uuid()` | Primary Key, Auto-generated |
| `created_at`          | `timestamptz` | `now()`             | Auto-timestamp              |
| `dealership`          | `text`        | -                   | Required field              |
| `contact_name`        | `text`        | -                   | Required field              |
| `address`             | `text`        | -                   | Required field              |
| `phone`               | `text`        | -                   | Required field              |
| `number_of_locations` | `text`        | -                   | Required field              |
| `email`               | `text`        | -                   | Optional                    |
| `number_of_users`     | `text`        | -                   | Optional                    |
| `dms_platform`        | `text`        | -                   | Optional                    |
| `crm_platform`        | `text`        | -                   | Optional                    |
| `website_host`        | `text`        | -                   | Optional                    |
| `accounting`          | `text`        | -                   | Optional                    |
| `payroll_portal`      | `text`        | -                   | Optional                    |
| `inventory_workflow`  | `text`        | -                   | Optional (long text)        |
| `deals_workflow`      | `text`        | -                   | Optional (long text)        |

4. **Enable Row Level Security (RLS):**
    - After creating the table, click on the table name
    - Go to **"RLS (Row Level Security)"** tab
    - Click **"Enable RLS"**
    - Click **"New Policy"**
    - Choose **"Enable insert access for service role only"**
    - This allows your API to insert data but keeps it secure

**Quick SQL Option (Faster):**

Alternatively, click **"SQL Editor"** in the left sidebar and paste this:

```sql
-- Create enrollments table
CREATE TABLE enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  dealership TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  address TEXT NOT NULL,
  phone TEXT NOT NULL,
  number_of_locations TEXT NOT NULL,
  email TEXT,
  number_of_users TEXT,
  dms_platform TEXT,
  crm_platform TEXT,
  website_host TEXT,
  accounting TEXT,
  payroll_portal TEXT,
  inventory_workflow TEXT,
  deals_workflow TEXT
);

-- Enable Row Level Security
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from service role
CREATE POLICY "Allow service role inserts" ON enrollments
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Create policy to allow inserts from anon users (for API)
CREATE POLICY "Allow anon inserts" ON enrollments
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

Click **"Run"** to execute.

---

### Step 3: Get Your Supabase Credentials

1. In Supabase dashboard, click **"Settings"** (gear icon) in the left sidebar
2. Click **"API"** under Project Settings
3. You'll see:

    - **Project URL** (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
    - **Project API keys:**
        - `anon` `public` key (this is safe to use in frontend)
        - `service_role` key (keep this SECRET, only use in backend)

4. **Copy these values** - you'll need them next!

---

## 💻 Part 2: Local Development Setup

### Step 1: Create Environment Variables File

1. In your project root, create a file named `.env`:

```bash
# .env file
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key-here

SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-public-key-here
```

2. Replace with your actual values from Step 3 above

3. **IMPORTANT:** Make sure `.env` is in your `.gitignore`:

```bash
# Add to .gitignore if not already there
.env
.env.local
```

---

### Step 2: Test Locally

1. Start your development server:

```bash
npm run dev
```

2. Open your browser to `http://localhost:5173` (or your dev URL)

3. Click **"Enroll"** button

4. Fill out the form and submit

5. **Check Supabase:**
    - Go to Supabase dashboard
    - Click **"Table Editor"**
    - Click on **"enrollments"** table
    - You should see your test submission! 🎉

---

## ☁️ Part 3: Deploy to Vercel

### Step 1: Push Code to GitHub

```bash
git add .
git commit -m "feat: Add Supabase enrollment form integration"
git push origin main
```

---

### Step 2: Deploy to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. **Configure Project:**

    - Framework Preset: **Vite** (should auto-detect)
    - Root Directory: `./`
    - Build Command: `npm run build`
    - Output Directory: `dist`

5. **Add Environment Variables:**
   Click **"Environment Variables"** and add:

    | Name                     | Value                     |
    | ------------------------ | ------------------------- |
    | `VITE_SUPABASE_URL`      | Your Supabase Project URL |
    | `VITE_SUPABASE_ANON_KEY` | Your Supabase Anon Key    |
    | `SUPABASE_URL`           | Your Supabase Project URL |
    | `SUPABASE_ANON_KEY`      | Your Supabase Anon Key    |

6. Click **"Deploy"**

7. Wait 2-3 minutes for deployment

8. Visit your live site! (e.g., `your-app.vercel.app`)

---

## 📊 Part 4: Viewing Enrollment Submissions

### Option 1: Supabase Dashboard (Easiest)

1. Go to your Supabase dashboard
2. Click **"Table Editor"** in sidebar
3. Click **"enrollments"** table
4. You'll see all submissions in a spreadsheet-like view

**Features:**

-   ✅ Filter and search submissions
-   ✅ Export to CSV
-   ✅ Edit/delete entries
-   ✅ Real-time updates
-   ✅ Click any row to see full details

**Pro Tip:** Bookmark this URL for quick access!

---

### Option 2: PostgreSQL Client (Advanced)

If you want to use a desktop app like **pgAdmin**, **TablePlus**, or **DBeaver**:

1. In Supabase, go to **Settings** → **Database**
2. Under **Connection Info**, you'll see:

    - Host
    - Database name
    - Port
    - User
    - Password (the one you created)

3. Use these credentials in your PostgreSQL client

4. Connect and query:

```sql
SELECT * FROM enrollments ORDER BY created_at DESC;
```

---

### Option 3: Build a Custom Admin Panel (Future)

You can create a simple admin page in your app:

```jsx
// Example: Admin page to view enrollments
import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';

function AdminPanel() {
    const [enrollments, setEnrollments] = useState([]);

    useEffect(() => {
        fetchEnrollments();
    }, []);

    async function fetchEnrollments() {
        const { data } = await supabase
            .from('enrollments')
            .select('*')
            .order('created_at', { ascending: false });

        setEnrollments(data);
    }

    return (
        <div>
            <h1>Enrollment Submissions</h1>
            {enrollments.map((enrollment) => (
                <div key={enrollment.id}>
                    <h3>{enrollment.dealership}</h3>
                    <p>Contact: {enrollment.contact_name}</p>
                    <p>Phone: {enrollment.phone}</p>
                    <p>
                        Submitted:{' '}
                        {new Date(enrollment.created_at).toLocaleString()}
                    </p>
                </div>
            ))}
        </div>
    );
}
```

---

## 🔔 Part 5: Get Email Notifications (Bonus)

Want to receive an email when someone enrolls?

### Option A: Supabase Database Webhooks

1. In Supabase, go to **Database** → **Webhooks**
2. Create a new webhook triggered on `INSERT` to `enrollments` table
3. Send webhook to an email service like:
    - **Zapier** (connects to Gmail/Outlook)
    - **Make.com** (formerly Integromat)
    - **n8n** (self-hosted automation)

### Option B: Add Email to API Function

Update `api/enrollment.js`:

```javascript
// Install: npm install @sendgrid/mail
import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
    // ... existing code ...

    // After successful Supabase insert:
    if (data) {
        // Send email notification
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        await sgMail.send({
            to: 'your-email@dealership.com',
            from: 'notifications@yourdomain.com',
            subject: `New Enrollment: ${formData.dealership}`,
            text: `New enrollment from ${formData.dealership}\n\nContact: ${formData.contactName}\nPhone: ${formData.phone}`,
        });
    }

    // ... rest of code ...
}
```

---

## ✅ Testing Checklist

-   [ ] Supabase project created
-   [ ] `enrollments` table created with all columns
-   [ ] RLS policies enabled
-   [ ] API credentials copied
-   [ ] `.env` file created locally
-   [ ] Local test submission successful
-   [ ] Data visible in Supabase dashboard
-   [ ] Code pushed to GitHub
-   [ ] Environment variables added to Vercel
-   [ ] Deployed to Vercel
-   [ ] Production test submission successful
-   [ ] Data appears in Supabase from production

---

## 🐛 Troubleshooting

### Issue: "Failed to save enrollment"

**Check:**

1. Are environment variables set correctly in Vercel?
2. Is the `enrollments` table created in Supabase?
3. Are RLS policies set up correctly?
4. Check Vercel function logs: Vercel Dashboard → Your Project → Functions

### Issue: "CORS error"

**Solution:** The API function already includes CORS headers. Make sure you're deploying the latest code.

### Issue: "Cannot find module '@supabase/supabase-js'"

**Solution:** Make sure package is installed:

```bash
npm install @supabase/supabase-js
```

### Issue: Environment variables not working

**Solution:**

-   Local: Restart dev server after adding `.env`
-   Vercel: Redeploy after adding environment variables

---

## 📈 Next Steps

1. **Set up email notifications** (Part 5)
2. **Create an admin panel** to view submissions
3. **Add form validation** on the backend
4. **Set up automated responses** to users who enroll
5. **Track analytics** on form submissions

---

## 🎉 You're All Set!

Your enrollment form is now:

-   ✅ Saving data to Supabase (PostgreSQL)
-   ✅ Deployed on Vercel
-   ✅ Scalable and secure
-   ✅ Easy to view and manage submissions

**Need help?** Check the Vercel function logs and Supabase logs for any errors.

**Want to view submissions?** Just go to your Supabase dashboard → Table Editor → enrollments!
