import React, { useState, useEffect } from 'react';
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from '../../../apis/firebase';

const Login = () => {

  const [userLoginStatus, setUserLoginStatus] = useState(null); // ログイン状態

  // ログイン
  const handleLogin = async () => {
    try {
      //Google認証のポップアップ表示
      const result = await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {userLoginStatus ? (
        <div>
          <p>ログイン中です</p>
          <button >ログアウト</button>
        </div>
      ) : (
        <div>
          <p>ログインしてください</p>
          <button onClick={handleLogin}>Google認証</button>
        </div>
      )}
    </div>
  );

};

export default Login;
