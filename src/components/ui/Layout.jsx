import React, { useRef, useState, useEffect } from "react";
//import Component
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { Header } from "./Header";
import { useTodo } from "../../hooks/useTodo"
import { useObserverUser } from "../../hooks/useObserverUser"
//Chakra
import { Container } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export const Layout = () => {
  const {todoList, addTodoListItem, toggleTodoListItemStatus, deleteTodoListItem} = useTodo();
  const {user, handleSignOut, handleSignIn} = useObserverUser();
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
      <Header title="TODOアプリ" as="h1"/>
      <h2>{process.env.REACT_APP_HELLO_WORLD}</h2>
      <div>
      {user ? (
        <div>
          <p>{user.displayName}さんがログイン中です</p>
          <Button onClick={handleSignOut}>ログアウト</Button>

          <Container centerContent>
          <TodoAdd
            todoTextRef={todoTextRef}
            handleAddTodoListItem={handleAddTodoListItem}
          ></TodoAdd>

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
        </div>
      ) : (
        <div>
          <p>ログインしてください</p>
          <Button onClick={handleSignIn}>Google認証</Button>
        </div>
      )}
    </div>
    </>
  );
};
export default Layout;