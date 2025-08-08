# 🍽️ Spare A Bite

## 🚀 Purpose

Spare A Bite is a community-driven food-sharing platform designed to reduce food waste by connecting donors and recipients. Built with React and Firebase, it offers a seamless way to share surplus food while providing a modern, responsive user experience.

## 🌐 Live URL

🔗 [Spare A Bite - Live Demo](https://spare-a-bite.web.app)

## ✨ Key Features

- **Authentication System**: Secure login/signup with Firebase Auth
- **Food Sharing**: Add, edit, and manage food items
- **Food Browsing**: View all available food with detailed info
- **Request Food**: Authenticated users can request available food
- **User Reviews**: View all submitted feedback from users
- **Donor Info**: See who shared each food item
- **Protected Routes**: Access controls using PrivateRoute component
- **Modern UI/UX**: Built with TailwindCSS, DaisyUI, and animations

## 📦 npm Packages Used

- [`react`](https://www.npmjs.com/package/react)
- [`react-router-dom`](https://www.npmjs.com/package/react-router-dom)
- [`firebase`](https://www.npmjs.com/package/firebase)
- [`axios`](https://www.npmjs.com/package/axios)
- [`@tanstack/react-query`](https://www.npmjs.com/package/@tanstack/react-query)
- [`tailwindcss`](https://www.npmjs.com/package/tailwindcss)
- [`daisyui`](https://www.npmjs.com/package/daisyui)
- [`framer-motion`](https://www.npmjs.com/package/framer-motion)
- [`sweetalert2`](https://www.npmjs.com/package/sweetalert2)
- [`react-hot-toast`](https://www.npmjs.com/package/react-hot-toast)
- [`date-fns`](https://www.npmjs.com/package/date-fns)
- [`lottie-react`](https://www.npmjs.com/package/lottie-react)
- [`react-fast-marquee`](https://www.npmjs.com/package/react-fast-marquee)

## 🛠️ How to Run Locally

Follow these steps to run **Spare A Bite** on your local machine:

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/spare-a-bite.git
cd spare-a-bite
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

### Step 3: Set Up Firebase Configuration

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Email/Password Authentication
3. Replace the Firebase config in `src/firebase/firebase.config.js` with your own:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### Step 4: Run the Development Server

```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)
