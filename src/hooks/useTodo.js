import React, { useState, useEffect } from "react";
import { useObserverUser } from "./useObserverUser";
// import { ulid } from "ulid";
import axios from "axios";
import * as todoData from "../apis/todos";

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
    const todoItem = todoList.find((item) => item.id === id);
    const newTodoItem = { ...todoItem, done: !todoItem.done } //doneを反転

    if (user){
      todoData.updateTodoData(user.uid, id, newTodoItem).then(() => {
        const newTodoList = todoList.map((item) =>
          item.id !== id ? item : newTodoItem
        );
        setTodoList(newTodoList);
      });
    }
  };

  //TODOの追加
  const addTodoListItem = (todoText) => {
    const newTodoItem = {
      // "id": ulid(),
      "content": todoText,
      "done": false
    };
    if (user){
      return todoData.addTodoData(user.uid, newTodoItem).then((docId) => {
        const todoWithId = { ...newTodoItem, id: docId };
        setTodoList([todoWithId, ...todoList]);
      });
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
    }
  };

  return {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem,
  };

};