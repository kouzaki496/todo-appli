import React, { useState, useEffect } from 'react';
import { FirebaseError } from '@firebase/util'
import { getAuth,onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from '../../lib/firebase';
import { Button } from '@chakra-ui/react'

const AuthComponent = () => {

  const [user, setUser] = useState(null); // ログイン状態

  //認証状態の監視
  useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //ログインしている場合
        setUser(authUser);
      } else {
        //ログインしていない場合
        setUser(null);
      }
  });

  return () => {
    unsubscribe();
  };
}, []);

  // ログイン
  const handleSignIn = async () => {
    try {
      //Google認証のポップアップ表示
      const result = await signInWithPopup(auth, googleProvider);
      console.log('ログイン成功', result.user);
    } catch (error) {
      console.error('ログインエラー', error);
    }
  };

  //ログアウト
  const handleSignOut = async () => {
    try {
      const auth = getAuth()
      await signOut(auth);
      console.log('ログアウト成功', user);
    } catch (error) {
      console.error('ログアウトエラー:',error);
    }
  }

  return (
    <div>
      {user ? (
        <div>
          <p>{user.displayName}さんがログイン中です</p>
          <Button onClick={handleSignOut}>ログアウト</Button>
        </div>
      ) : (
        <div>
          <p>ログインしてください</p>
          <Button onClick={handleSignIn}>Google認証</Button>
        </div>
      )}
    </div>
  );

};

export default AuthComponent;
