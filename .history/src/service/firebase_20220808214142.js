import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBWw9nFTzfSSEk6Z5napmuljyQwkBWavAI",
  authDomain: "business-card-maker-f9675.firebaseapp.com",
  databaseURL: "https://business-card-maker-f9675-default-rtdb.firebaseio.com",
  projectId: "business-card-maker-f9675",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);