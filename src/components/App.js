import React, { useState, useEffect } from "react";
import axios from "axios";
import { ulid } from "ulid";
import { Box, Container, Text, List, ListItem, Flex, Button, IconButton, Input } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Header } from "./Header";
import { Title } from "./Title";


const todoDataUrl = "http://localhost:3100/todos"; //モックサーバーのURL

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState([]);

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
              fontSize={{ base: "sm", md: "md"}}
              variant="solid"
              size={{ base: "sm", md: "md"}}
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

  console.log("TODOリスト:", todoList);

  //未完了リスト
  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  console.log("未完了TODOリスト:", inCompletedList);

  //完了リスト
  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  //インプットフォームの状態を管理
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
    console.log(`[onChangeTodoText]todoText:${todoText}`);
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
    console.log(`[handleDeleteTodoListItem]id:${id}`);
    console.log(`[handleDeleteTodoListItem:]todoList:${JSON.stringify(todoList)}`);

    const isDeleteTodo = (todoList) => todoList.id === id;
    const deleteTodoIndex = todoList.findIndex(isDeleteTodo);
    console.log(`[handleDeleteTodoListItem]deleteTodoIndex:${deleteTodoIndex}`);

    newTodo.splice(deleteTodoIndex, 1);
    console.log(`[handleDeleteTodoListItem]newTodo:${JSON.stringify(newTodo)}`);

    setTodoList(newTodo);
  };

  //ステータスの変更
  const toggleTodoListItemStatus = (id, done) => {

    const todoItem = todoList.find((item) => item.id === id);
    const newTodoItem = { ...todoItem, done: !done } //doneを反転
    console.log(`[toggleTodoListItemStatus]newTodoItem:${JSON.stringify(newTodoItem)}`);

    const newTodoList = todoList.map((item) => {

      return item.id !== id ? item : newTodoItem;

    });

    setTodoList(newTodoList);
    console.log(`[toggleTodoListItemStatus]newTodoList:${JSON.stringify(newTodoList)}`);

  };


  console.log("完了TODOリスト:", completedList);

  return (
    <Box centerContent>
    <Container centerContent>
      <Header
        title="TODOアプリ"
        as="h1"
        />
    </Container>
    <Container centerContent p={{base: "0", md: "0"}} maxWidth="768px">
    <Title title="TODOを追加してください" />
      <Flex align="center" justify="flex-end" width={{base: "85vw", md: "40vw"}}>
        <Input
          placeholder="〇〇をする"
          bgColor="white"
          borderColor="gray.300"
          focusBorderColor="pink.400"
          m="4"
          value={todoText} onChange={onChangeTodoText}
        ></Input>
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