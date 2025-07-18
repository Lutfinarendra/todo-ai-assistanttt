
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5F72sfwKIv107ai4YAlRMkTsuIL2j11I",
  authDomain: "todo-ai-assistant-27572.firebaseapp.com",
  projectId: "todo-ai-assistant-27572",
  storageBucket: "todo-ai-assistant-27572.firebasestorage.app",
  messagingSenderId: "676120853553",
  appId: "1:676120853553:web:1fd5260a2937e2293b6910",
  measurementId: "G-4P9J1CR0S6"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };