import React, { useState, useEffect } from "react";
import { FirebaseError } from '@firebase/util'
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from '../lib/firebase';

export const useObserverUser = () => {
  const [user, setUser] = useState(null); // ログイン状態

  useEffect (() => {
    const authInstance  = getAuth();
    const unsubscribe = onAuthStateChanged(authInstance , (authUser) => {
      if (authUser) {
        //ログインしている場合
        setUser(authUser);
      } else {
        //ログインしていない場合
        setUser(null);
      }
  });
    return () => unsubscribe();
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
      const authInstance = getAuth()
      await signOut(authInstance);
      console.log('ログアウト成功', user);
    } catch (error) {
      console.error('ログアウトエラー:',error);
    }
  }

  return {
    user,
    handleSignIn,
    handleSignOut
  };

};