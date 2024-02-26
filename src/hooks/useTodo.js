import React, { useState, useEffect } from "react";
import { ulid } from "ulid";
import axios from "axios";
import * as todoData from "../apis/todos";

export const useTodo = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState([]);
  const todoDataUrl = "http://localhost:3100/todos"; //モックサーバーのURL

  // useEffect(() => {
  //   todoData.getAllTodosData().then((todo) => {
  //     setTodoList([...todo].reverse());
  //   })
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(todoDataUrl);
      setTodoList(response.data);
    };
    fetchData();
  }, []);


  //ステータスの変更
  const toggleTodoListItemStatus = (id, done) => {
    const todoItem = todoList.find((item) => item.id === id);
    const newTodoItem = { ...todoItem, done: !done } //doneを反転
    const newTodoList = todoList.map((item) =>{
      return item.id !== id ? item : newTodoItem;
    });
      setTodoList(newTodoList);
  };
  // const toggleTodoListItemStatus = (id, done) => {
  //   const todoItem = todoList.find((item) => item.id === id);
  //   const newTodoItem = { ...todoItem, done: !done } //doneを反転

  //   todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
  //     const newTodoList = todoList.map((item) =>
  //       item.id !== updatedTodo.id ? item : updatedTodo
  //     );
  //     setTodoList(newTodoList);
  //   });
  // };

  //TODOの追加
  const addTodoListItem = (todoText) => {
    const newTodoItem = {
      "id": ulid(),
      "content": todoText,
      "done": false
    };
      setTodoList([...todoList, newTodoItem]);
      setTodoText("");
  };
  // const addTodoListItem = (todoText) => {
  //   const newTodoItem = {
  //     "id": ulid(),
  //     "content": todoText,
  //     "done": false
  //   };
  //   return todoData.addTodoData(newTodoItem).then((addTodo) => {
  //     setTodoList([addTodo, ...todoList]);
  //   });
  // };

  //TODOの削除
  const deleteTodoListItem = (id) => {
      const newTodoList = todoList.filter(
        (item) => item.id !== id
      );
      setTodoList(newTodoList);
  }
  // const deleteTodoListItem = (id) => {
  //   todoData.deleteTodoData(id).then((deleteTodoListItemId) => {
  //     const newTodoList = todoList.filter(
  //       (item) => item.id !== deleteTodoListItemId
  //     );
  //     setTodoList(newTodoList);
  //   })
  // }
  // const deleteTodoListItem = (id) => {
  //   const newTodo = [...todoList];
  //   const isDeleteTodo = (todoList) => todoList.id === id;
  //   const deleteTodoIndex = todoList.findIndex(isDeleteTodo);
  //   newTodo.splice(deleteTodoIndex, 1);
  //   setTodoList(newTodo);
  // };

  return {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem,
  };

};