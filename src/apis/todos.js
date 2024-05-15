//npx json-server --watch db.json --port 3100
// import axios from "axios";
import {auth, googleProvider, db} from "../lib/firebase";
import { getFirestore, doc, collection, setDoc, addDoc, getDocs, updateDoc, deleteDoc, deleteField, serverTimestamp } from 'firebase/firestore';

// const todoDataUrl = "http://localhost:3100/todos"; //モックサーバーのURL

//Firestoreのコレクション名
const todoCollection = 'todos';

//すべてのTODOデータを取得
export const getAllTodosData = async () => {
  const queryResultData = await getDocs(collection(db, todoCollection));
  const todosData = queryResultData.docs
    .filter(doc => doc.exists()) // ドキュメントが存在するか確認
    .map(doc => ({ id: doc.id, ...doc.data() }));
  return todosData;
};

//TODOの追加
export const addTodoData = async (todo) => {
  const docRef = await addDoc(collection(db, todoCollection), todo);
  return docRef.id;
}

//TODOの削除
export const deleteTodoData = async (id) => {
  await deleteDoc(doc(db, todoCollection, id));
  return id;
};

//TODOの更新
export const updateTodoData = async (id, todo) => {
  await updateDoc(doc(db, todoCollection, id), todo);
  return id;
};