# Enrollment Form - Data Storage Setup Guide

This guide explains how to set up backend storage for the enrollment form submissions.

## Current Implementation

The form is currently set up to send data via API call, but you need to implement one of the following backend solutions:

## Option 1: Create Your Own Backend API (Recommended for Production)

### Using Node.js/Express

1. **Create a backend folder and install dependencies:**

```bash
mkdir backend
cd backend
npm init -y
npm install express cors body-parser
```

2. **Create `server.js`:**

```javascript
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/enrollment', (req, res) => {
    const formData = req.body;

    // Save to JSON file (for testing)
    fs.appendFileSync(
        'enrollments.json',
        JSON.stringify(formData, null, 2) + ',\n'
    );

    // OR Save to database (MongoDB, PostgreSQL, etc.)
    // await Enrollment.create(formData);

    res.json({ success: true, message: 'Enrollment submitted' });
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
```

3. **Update the form's fetch URL** in `EnrollmentForm.jsx`:

```javascript
const response = await fetch('http://localhost:3001/api/enrollment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
});
```

---

## Option 2: Email Service (EmailJS - No Backend Required)

### Setup:

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email template
3. Install EmailJS:

```bash
npm install @emailjs/browser
```

4. **Update `EnrollmentForm.jsx`:**

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await emailjs.send(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            {
                dealership: formData.dealership,
                contactName: formData.contactName,
                address: formData.address,
                phone: formData.phone,
                // ... other fields
            },
            'YOUR_PUBLIC_KEY'
        );

        alert('Enrollment submitted successfully!');
        handleClose();
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit. Please try again.');
    }
};
```

---

## Option 3: Firebase/Firestore (Google Cloud)

### Setup:

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com/)
2. Install Firebase:

```bash
npm install firebase
```

3. **Create `firebase.js`:**

```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

4. **Update `EnrollmentForm.jsx`:**

```javascript
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await addDoc(collection(db, 'enrollments'), {
            ...formData,
            timestamp: new Date(),
        });

        alert('Enrollment submitted successfully!');
        handleClose();
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit. Please try again.');
    }
};
```

---

## Option 4: Supabase (PostgreSQL with real-time features)

### Setup:

1. Create account at [supabase.com](https://supabase.com/)
2. Create a table called `enrollments`
3. Install Supabase:

```bash
npm install @supabase/supabase-js
```

4. **Create `supabase.js`:**

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseKey);
```

5. **Update `EnrollmentForm.jsx`:**

```javascript
import { supabase } from '../supabase';

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const { data, error } = await supabase
            .from('enrollments')
            .insert([formData]);

        if (error) throw error;

        alert('Enrollment submitted successfully!');
        handleClose();
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit. Please try again.');
    }
};
```

---

## Option 5: Google Sheets (Simple, No Backend)

### Setup:

1. Use [SheetDB](https://sheetdb.io/) or Google Apps Script
2. Create a Google Sheet for storing enrollments
3. Get the API endpoint from SheetDB

4. **Update `EnrollmentForm.jsx`:**

```javascript
const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await fetch('YOUR_SHEETDB_API_URL', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: formData }),
        });

        alert('Enrollment submitted successfully!');
        handleClose();
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit. Please try again.');
    }
};
```

---

## Recommended for Your Use Case:

**For Production**: Option 1 (Custom Backend) or Option 4 (Supabase)

-   Best for scalability
-   Full control over data
-   Can add authentication, validation, etc.

**For Quick Setup**: Option 2 (EmailJS) or Option 5 (Google Sheets)

-   No backend needed
-   Easy to set up
-   Good for low-volume submissions

---

## Security Considerations:

1. **Never commit API keys** to your repository
2. Use environment variables (`.env` file):

```
VITE_API_URL=http://localhost:3001
VITE_FIREBASE_API_KEY=your_key_here
```

3. Add validation on the backend
4. Implement rate limiting to prevent spam
5. Use HTTPS in production
6. Sanitize user inputs

---

## Testing the Form:

1. Open browser console (F12)
2. Click "Enroll" and fill out the form
3. Submit and check console for `formData` object
4. Verify data is saved in your chosen storage solution

---

## Need Help?

-   Check browser console for errors
-   Verify API endpoints are correct
-   Ensure CORS is enabled on your backend
-   Test with simple data first
