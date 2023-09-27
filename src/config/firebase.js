import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArPHTmmouBLErCKhGajQwnzeE_mDnUOvk",
  authDomain: "byeasy-b11fb.firebaseapp.com",
  projectId: "byeasy-b11fb",
  storageBucket: "byeasy-b11fb.appspot.com",
  messagingSenderId: "245774139649",
  appId: "1:245774139649:web:607b66d8e66c3b78785b00"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
