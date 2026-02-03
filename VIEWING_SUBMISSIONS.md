# 📊 Quick Guide: Viewing Enrollment Submissions

## 🚀 Easiest Way: Supabase Dashboard

### Step-by-Step:

1. **Go to:** [https://supabase.com/dashboard](https://supabase.com/dashboard)

2. **Login** with your account

3. **Select your project:** `web-bridge-pro` (or whatever you named it)

4. **Click "Table Editor"** in the left sidebar (looks like a table icon)

5. **Click "enrollments"** table

6. **View all submissions!** You'll see:
    - All form fields in columns
    - Each submission as a row
    - Timestamps showing when submitted
    - Filter/search/sort options at the top

### 🎯 What You Can Do:

✅ **View All Data**: See every field from the enrollment form  
✅ **Search**: Use the search bar to find specific dealerships or contacts  
✅ **Filter**: Click column headers to filter by specific values  
✅ **Sort**: Click column headers to sort (newest first, alphabetically, etc.)  
✅ **Export**: Click the "..." menu → Export as CSV for Excel/Sheets  
✅ **Edit**: Click any cell to edit (useful for adding notes)  
✅ **Delete**: Select rows and delete if needed  
✅ **Real-time**: Refreshes automatically when new submissions come in

---

## 📱 Quick Access Bookmark

**Bookmark this URL for instant access:**

```
https://supabase.com/dashboard/project/YOUR_PROJECT_ID/editor/enrollments
```

(Replace `YOUR_PROJECT_ID` with your actual project ID from the URL)

---

## 🔍 Example Queries You Can Run

### See All Submissions (Newest First):

1. Click on `enrollments` table
2. Already sorted by `created_at` by default
3. Newest submissions appear at the top

### Find Specific Dealership:

1. Click filter icon (funnel) at top
2. Select column: `dealership`
3. Type dealership name
4. Press Enter

### Count Total Enrollments:

Look at the bottom of the table - shows total row count

### Export to Excel:

1. Click three dots menu (⋮) at top right
2. Click "Download as CSV"
3. Open in Excel or Google Sheets

---

## 💻 Using PostgreSQL Client (Advanced)

If you prefer desktop database tools like **TablePlus**, **DBeaver**, or **pgAdmin**:

### Connection Details:

1. In Supabase dashboard, go to: **Settings → Database**
2. Copy the connection string or individual credentials:
    - **Host**: `db.xxxxxxxxxxxxx.supabase.co`
    - **Database**: `postgres`
    - **Port**: `5432`
    - **User**: `postgres`
    - **Password**: Your database password from setup

### Example SQL Queries:

```sql
-- View all enrollments (newest first)
SELECT * FROM enrollments
ORDER BY created_at DESC;

-- Count total enrollments
SELECT COUNT(*) FROM enrollments;

-- View enrollments from today
SELECT * FROM enrollments
WHERE created_at::date = CURRENT_DATE;

-- View enrollments with multiple locations
SELECT dealership, contact_name, number_of_locations
FROM enrollments
WHERE number_of_locations::int > 1;

-- Search by dealership name
SELECT * FROM enrollments
WHERE dealership ILIKE '%auto%';

-- Export to CSV (in most PostgreSQL clients)
COPY (SELECT * FROM enrollments ORDER BY created_at DESC)
TO '/path/to/enrollments.csv'
WITH CSV HEADER;
```

---

## 📧 Get Email Notifications

### Quick Setup with Zapier:

1. Go to [zapier.com](https://zapier.com)
2. Create a new Zap
3. **Trigger**: Supabase - New Row
4. Connect your Supabase account
5. Select `enrollments` table
6. **Action**: Email - Send Email
7. Configure email template with form fields
8. Turn on Zap

Now you'll get an email every time someone enrolls!

---

## 📊 View Submission Details

### When you click on any row in Supabase:

You'll see a panel with all fields:

```
ID: 123e4567-e89b-12d3-a456-426614174000
Created At: 2026-02-03 14:32:15
Dealership: ABC Auto Sales
Contact Name: John Smith
Address: 123 Main St, Dallas, TX 75001
Phone: (555) 123-4567
Number of Locations: 3
Email: john@abcauto.com
Number of Users: 8
DMS Platform: VinSolutions
CRM Platform: Salesforce
Website Host: Dealer.com
Accounting: QuickBooks
Payroll Portal: ADP

Inventory Workflow:
Manheim Auctions, Central Dispatch Transport,
NextGear Floor Plan, Carfax Reports...

Deals Workflow:
Equifax, Chase Auto Finance, JM&A Warranty,
DealerTrack F&I, Texas DMV...
```

---

## 🎯 Pro Tips:

1. **Pin the Supabase tab** in your browser for quick access
2. **Set up email notifications** so you don't have to check manually
3. **Export weekly** to keep backups in Excel/Sheets
4. **Use filters** to segment by location count, DMS platform, etc.
5. **Add notes** by creating a custom `notes` column if needed

---

## 🚨 Troubleshooting:

**Don't see any data?**

-   Make sure form was submitted successfully (check browser console)
-   Verify you're looking at the correct Supabase project
-   Check if RLS policies are set up correctly

**Can't access Supabase dashboard?**

-   Reset password at supabase.com
-   Check your email for login link

**Need to share access?**

-   Go to Settings → Team
-   Invite team members via email

---

## 📞 Support:

-   **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
-   **Supabase Discord**: [discord.supabase.com](https://discord.supabase.com)
-   **Check Logs**: Vercel Dashboard → Your Project → Functions

---

## ✅ Quick Checklist:

-   [ ] Bookmarked Supabase dashboard
-   [ ] Can view enrollments table
-   [ ] Tested filtering and sorting
-   [ ] Exported a test CSV
-   [ ] Set up email notifications (optional)
-   [ ] Shared access with team (if needed)

**That's it!** You're all set to manage enrollment submissions. 🎉
