import React, { useState, useEffect } from "react";
import { ulid } from "ulid";

import * as todoData from "../apis/todos";

export const useTodo = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    todoData.getAllTodosData().then((todo) => {
      setTodoList([...todo].reverse());
    })
  }, []);

  //ステータスの変更
  const toggleTodoListItemStatus = (id, done) => {
    console.log("aaa");
    const todoItem = todoList.find((item) => item.id === id);
    const newTodoItem = { ...todoItem, done: !done } //doneを反転

    todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
      const newTodoList = todoList.map((item) =>
        item.id !== updatedTodo.id ? item : updatedTodo
      );
      setTodoList(newTodoList);
    });
  };

  //TODOの追加
  const addTodoListItem = (todoText) => {
    console.log("addTodoListItem");
    const newTodoItem = {
      "id": ulid(),
      "content": todoText,
      "done": false
    };
      setTodoList([...todoList, newTodoItem]);
  };

  //TODOの削除
  const deleteTodoListItem = (id) => {
    console.log("deleteTodoListItem");
    const newTodo = [...todoList];
    const isDeleteTodo = (todoList) => todoList.id === id;
    const deleteTodoIndex = todoList.findIndex(isDeleteTodo);
    newTodo.splice(deleteTodoIndex, 1);
    setTodoList(newTodo);
    console.log("aaa");
  };

  return {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem,
  };

};