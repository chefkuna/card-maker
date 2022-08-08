const firebaseConfig = {
  apiKey: "AIzaSyBWw9nFTzfSSEk6Z5napmuljyQwkBWavAI",
  authDomain: "business-card-maker-f9675.firebaseapp.com",
  databaseURL: "https://business-card-maker-f9675-default-rtdb.firebaseio.com",
  projectId: "business-card-maker-f9675",
  storageBucket: "business-card-maker-f9675.appspot.com",
  messagingSenderId: "454907343187",
  appId: "1:454907343187:web:0d2c90765ccf328616b1a6",
  measurementId: "G-VKV8H6SVTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);