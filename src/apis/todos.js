//npx json-server --watch db.json --port 3100
import {auth, googleProvider, db} from "../lib/firebase";
import { getFirestore, doc, collection, setDoc, addDoc, getDocs, updateDoc, deleteDoc, deleteField, serverTimestamp } from 'firebase/firestore';

//Firestoreのコレクション名
const todoCollection = 'todos';

//すべてのTODOデータを取得
export const getAllTodosData = async (uid) => {
  const userTodosCollection = collection(db, `${todoCollection}/${uid}/items`);
  const queryResultData = await getDocs(userTodosCollection);
  const todosData = queryResultData.docs
    .filter(doc => doc.exists()) // ドキュメントが存在するか確認
    .map(doc => ({ id: doc.id, ...doc.data() }));
  return todosData;
};

//TODOの追加
export const addTodoData = async (uid, todo) => {
  const userTodosCollection = collection(db, `${todoCollection}/${uid}/items`);
  const docRef = await addDoc(userTodosCollection, todo);
  return docRef.id;
}

//TODOの削除
export const deleteTodoData = async (uid, id) => {
  const todoDoc = doc(db, `${todoCollection}/${uid}/items`, id);
  await deleteDoc(todoDoc);
  return id;
};

//TODOの更新
export const updateTodoData = async (uid, id, todo) => {
  const todoDoc = doc(db, `${todoCollection}/${uid}/items`, id);
  await updateDoc(todoDoc, todo);
  return id;
};