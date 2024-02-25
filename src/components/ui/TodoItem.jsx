import React from 'react'
import { DeleteButton } from "./DeleteButton"
import { Box, Container, Text, List, ListItem, Flex, Button, IconButton } from "@chakra-ui/react";

  //コンポーネント：TODOアイテム
  export const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem}) => {

  const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

    return (
      <Container centerContent w="full">
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
                colorScheme="red.800"
                bg="blue.600"
                color="white"
                fontWeight="light"
                size={{ base: "sm", md: "md"}}
                fontSize={{ base: "sm", md: "md"}}
                variant="solid"
                m="2"
                onClick={handleToggleTodoListItemStatus}
              >{todo.done ? "未完了にする" : "完了にする"}</Button>
              <Button
                onClick={handleDeleteTodoListItem}>
                <DeleteButton
                  variant="outline"
                  color="pink.400"
                  >削除</DeleteButton>
              </Button>
          </Flex>
        </List>
      </Container>
    );
  };

export default TodoItem