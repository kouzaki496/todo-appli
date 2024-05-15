import React, { useState, useEffect } from "react";
// import { ulid } from "ulid";
import axios from "axios";
import * as todoData from "../apis/todos";

export const useTodo = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState([]);
  // const todoDataUrl = "http://localhost:3100/todos"; //モックサーバーのURL

  useEffect(() => {
    todoData.getAllTodosData().then((todos) => {
      setTodoList([...todos].reverse());
    })
  }, []);


  //ステータスの変更
  const toggleTodoListItemStatus = (id, done) => {
    const todoItem = todoList.find((item) => item.id === id);
    const newTodoItem = { ...todoItem, done: !todoItem.done } //doneを反転

    todoData.updateTodoData(id, newTodoItem).then(() => {
      const newTodoList = todoList.map((item) =>
        item.id !== id ? item : newTodoItem
      );
      setTodoList(newTodoList);
    });
  };

  //TODOの追加
  const addTodoListItem = (todoText) => {
    const newTodoItem = {
      // "id": ulid(),
      "content": todoText,
      "done": false
    };
    return todoData.addTodoData(newTodoItem).then((docId) => {
      const todoWithId = { ...newTodoItem, id: docId };
      setTodoList([todoWithId, ...todoList]);
    });
  };

  //TODOの削除
  const deleteTodoListItem = (id) => {
    todoData.deleteTodoData(id).then(() => {
      setTodoList((prevTodoList) => {
        const newTodoList = prevTodoList.filter((item) => item.id !== id);
        return newTodoList;
      });
    });
  };

  return {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem,
  };

};