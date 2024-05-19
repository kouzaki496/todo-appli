import React from 'react'
//import Component
import { DeleteButton } from "./DeleteButton"
import StatusButton from "./StatusButton";
//Chakra
import { Text, Flex } from "@chakra-ui/react";

//コンポーネント：TODOアイテム
export const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem}) => {

  const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);
  const handleDeleteTodoListItem = () => {
    console.log("Delete button clicked for id:", todo.id); // デバッグ用ログ
    deleteTodoListItem(todo.id);
  };

  return (
    <Flex
      boxShadow="md" // 影を追加
      borderRadius="md"
      width={{ base: "95vw", md: "80vw", xl: "38vw" }}
      p="2"
      mt="4"
      bg={todo.done ? 'gray.100' : 'white'}
      alignItems="center"
      justifyContent="space-between"
    >
      <Text ml={4}>
        {todo.content}
      </Text>
      <Flex justify="flex-end" alignItems="center">
        <StatusButton
          done={todo.done}
          onClick={handleToggleTodoListItemStatus}
        />
        <DeleteButton
          done={todo.done}
          onClick={handleDeleteTodoListItem}
        />
      </Flex>
    </Flex>
  );
};

export default TodoItem