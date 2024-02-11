import React, { useState, useEffect } from "react";
import axios from "axios";
import { ulid } from "ulid";
import { firebaseApp } from "../lib/firebase";
import AuthComponent from "./features/AuthComponent";
//Chakra
import { Box, Container, Text, List, ListItem, Flex, Button, IconButton } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Header } from "./ui/Header";
import { Title } from "./ui/Title";
import { InputBox } from "./ui/InputBox";


const todoDataUrl = "http://localhost:3100/todos"; //モックサーバーのURL

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState([]);
  const { user } = AuthComponent()

  //コンポーネント：TODOアイテム
  const TodoItem = ({ todo }) => {
    return (
      <List
        borderWidth="1px"
        borderRadius="md"
        width={{base: "80vw", md: "38vw"}}
        p="2"
        mt="4"
        bg="white"
        >
          <Text display="flex" ml={4}>{todo.content}</Text>
          <Flex justify="flex-end" alignItems="center">
            <Button
              colorScheme="red.400"
              bg="blue.600"
              color="white"
              fontWeight="light"
              size={{ base: "sm", md: "md"}}
              fontSize={{ base: "sm", md: "md"}}
              variant="solid"
              m="2"
              onClick={ () => toggleTodoListItemStatus(todo.id, todo.done)}
            >{todo.done ? "未完了にする" : "完了にする"}</Button>
            <DeleteIcon
              variant="outline"
              color="pink.400"
              onClick={ () => handleDeleteTodoListItem(todo.id) }
            >削除</DeleteIcon>
        </Flex>
      </List>
    );
  };

  //コンポーネント：TODOリスト
  const TodoList = ({ todoList }) => {
    if(todoList.length !== 0)
    return (
      <ul>
        {todoList.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(todoDataUrl);
      setTodoList(response.data);
      console.log(`[response.data]${JSON.stringify(response.data)}`);
    };
    fetchData();
  }, []);


  //未完了リスト
  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });


  //完了リスト
  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  //インプットフォームの状態を管理
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  //リストの追加
  const handleAddTodoListItem = () => {
    if (todoText === "")
    return;
    const newTodo = {
      "id": ulid(),
      "content": todoText,
      "done": false
    };
    setTodoList([...todoList, newTodo]);
    //追加した後は、フォームを空にする
    setTodoText("");
    };

  //リストの削除
  const handleDeleteTodoListItem = (id) => {
    const newTodo = [...todoList];
    const isDeleteTodo = (todoList) => todoList.id === id;
    const deleteTodoIndex = todoList.findIndex(isDeleteTodo);
    newTodo.splice(deleteTodoIndex, 1);
    setTodoList(newTodo);
  };

  //ステータスの変更
  const toggleTodoListItemStatus = (id, done) => {
    const todoItem = todoList.find((item) => item.id === id);
    const newTodoItem = { ...todoItem, done: !done } //doneを反転
    const newTodoList = todoList.map((item) => {
      return item.id !== id ? item : newTodoItem;
    });
    setTodoList(newTodoList);
  };


  return (
    <Box centerContent>
      <Header/>
    <AuthComponent />
    <h2>{process.env.REACT_APP_HELLO_WORLD}</h2>
    <Container centerContent p={{base: "0", md: "0"}} maxWidth="768px">
    <Title title="TODOを追加してください" />
      <Flex align="center" justify="flex-end" width={{base: "85vw", md: "40vw"}}>
        <InputBox value={todoText} onChange={onChangeTodoText}></InputBox>
      <AddIcon
        bg="blue.600"
        color="white"
        p={2}
        boxSize="8"
        rounded="md"
        onClick={ handleAddTodoListItem }
      ></AddIcon>
      </Flex>
      {/* <p>入力したテキスト: {todoText}</p> */}

      <Title title="未完了タスク" as="h2" />
      <TodoList todoList={inCompletedList} />

      <Title title="完了タスク" as="h2" />
      <TodoList todoList={completedList} />

    </Container>
    </Box>
  );
}

export default App;