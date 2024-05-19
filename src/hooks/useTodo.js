import React, { useState, useEffect } from "react";
import { useObserverUser } from "./useObserverUser";
import * as todoData from "../apis/todos";
import { ulid } from "ulid";

export const useTodo = () => {
  const { user } = useObserverUser();
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState([]);

  useEffect(() => {
    if (user) {
      todoData.getAllTodosData(user.uid).then((todos) => {
        setTodoList([...todos].reverse());
      })
    } else {
      setTodoList([]);
    }
  }, [user]);

  //ステータスの変更
  const toggleTodoListItemStatus = (id, done) => {
    if (user){
      const todoItem = todoList.find((item) => item.id === id);
      const newTodoItem = { ...todoItem, done: !todoItem.done } //doneを反転
      todoData.updateTodoData(user.uid, id, newTodoItem).then(() => {
        const newTodoList = todoList.map((item) =>
          item.id !== id ? item : newTodoItem
        );
        setTodoList(newTodoList);
      });
    } else {
      //ユーザーが認証されていない場合
      const newTodoList = todoList.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      );
      setTodoList(newTodoList);
    }
  };

  //TODOの追加
  const addTodoListItem = (todoText) => {
    if (user){
    const newTodoItem = {
      // "id": ulid(),
      "content": todoText,
      "done": false
    };
      return todoData.addTodoData(user.uid, newTodoItem).then((docId) => {
        const todoWithId = { ...newTodoItem, id: docId };
        setTodoList([todoWithId, ...todoList]);
      });
    } else {
      // ユーザーが認証されていない場合、クライアント側でTODOを追加する
      const newTodoItem = {
        "id": ulid(), // ユニークなIDを生成
        "content": todoText,
        "done": false
    }
    setTodoList([newTodoItem, ...todoList]);
    }
  };

  //TODOの削除
  const deleteTodoListItem = (id) => {
    if (user) {
      todoData.deleteTodoData(user.uid, id).then(() => {
        setTodoList((prevTodoList) => {
          const newTodoList = prevTodoList.filter((item) => item.id !== id);
          return newTodoList;
        });
      });
    } else {
      // ユーザーが認証されていない場合
      setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== id));
    }
  };

  return {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem,
  };

};