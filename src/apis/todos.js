//npx json-server --watch db.json --port 3100
import axios from "axios";
import db from "../lib/firebase";
import { getFirestore, doc, collection, setDoc, addDoc, getDocs, updateDoc, deleteDoc, deleteField,serverTimestamp } from 'firebase/firestore';

const todoDataUrl = "http://localhost:3100/todos"; //モックサーバーのURL

//すべてのTODOデータを取得
export const getAllTodosData = async () => {
  const response = await axios.get(todoDataUrl);
  return response.data;
};

//TODOの追加
export const addTodoData = async(todo) => {
  const response = await axios.post(todoDataUrl, todo);
  return response.data;
}
//TODOの削除
export const deleteTodoData = async(id) => {
  await axios.delete(`${todoDataUrl}/${id}`);
  return id;
};

//TODOの更新
export const updateTodoData = async(id, todo) => {
  const response = await axios.put(`${todoDataUrl}/${id}`, todo);
  return response.data;
};