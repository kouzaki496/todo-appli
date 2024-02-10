import {initializeApp} from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA3Rra6wktrQxT0CaT1oh5mHd39beerQ9U",
  authDomain: "portfolio-1458b.firebaseapp.com",
  projectId: "portfolio-1458b",
  storageBucket: "portfolio-1458b.appspot.com",
  messagingSenderId: "487309702368",
  appId: "1:487309702368:web:7051bcb152158fa1444c85"
};

// Firebaseの初期化
const firebaseApp = initializeApp(firebaseConfig);

// 認証オブジェクト
const auth = getAuth(firebaseApp);

// Google認証プロバイダのインスタンス作成
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };