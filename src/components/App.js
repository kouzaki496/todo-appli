import React, { useRef } from "react";
import { firebaseApp } from "../lib/firebase";
import "../index.css";
//import Component
import AuthComponent from "./features/AuthComponent";
import { TodoItem } from "./ui/TodoItem"
import { TodoList } from "./ui/TodoList"
import { TodoAdd } from "./ui/TodoAdd"
import { useTodo } from "../hooks/useTodo"
//Chakra
import { Box, Container, Text, List, ListItem, Flex, Button, IconButton } from "@chakra-ui/react";
import { Header } from "./ui/Header";
import { Title } from "./ui/Title";

function App() {
  const { user } = AuthComponent();
  const {todoList, addTodoListItem, toggleTodoListItemStatus, deleteTodoListItem} = useTodo();
  const todoTextRef = useRef(null);

  //未完了リスト
  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  //完了リスト
  const completedList = todoList.filter((todo) => {
    return todo.done;
  });;

  const handleAddTodoListItem = () => {
    if (todoTextRef.current.value === "") return;
    addTodoListItem(todoTextRef.current.value);
    //インプットフォームを空にする
    todoTextRef.current.value="";
  };

  return (
    <>
      <Header/>
      <AuthComponent />
      <h2>{process.env.REACT_APP_HELLO_WORLD}</h2>
      <Container centerContent>
        <TodoAdd
          todoTextRef={todoTextRef}
          handleAddTodoListItem={handleAddTodoListItem}
        ></TodoAdd>
        {/* <input ref={todoTextRef} type="text"></input>
        <Button onClick={() => alert(todoTextRef.current.value)}>値の確認</Button> */}

        {/* <p>入力したテキスト: {todoTextRef.current.value}</p> */}

        <TodoList
          todoList={inCompletedList}
          toggleTodoListItemStatus={toggleTodoListItemStatus}
          deleteTodoListItem={deleteTodoListItem}
          title="未完了タスク" as="h2"
        />
        <TodoList
          todoList={completedList}
          toggleTodoListItemStatus={toggleTodoListItemStatus}
          deleteTodoListItem={deleteTodoListItem}
          title="完了タスク" as="h2"
        />
    </Container>
    </>
  );
}


export default App;