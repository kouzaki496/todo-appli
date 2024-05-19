import React from 'react';
import { Flex, Text, Center, Box, Icon } from "@chakra-ui/react";
import { Title } from "./Title";
import { TodoItem } from "./TodoItem";
import { MdAssignmentTurnedIn } from "react-icons/md";

export const TodoList = ({
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem,
  title,
  as
}) => {
  return (
    <Box width="100%">
      {/* タイトル */}
      <Title title={title} as={as} textAlign="center" />

      {/* タスクがない場合の表示 */}
      {todoList.length === 0 && (
        <Box
          w="full"
          bg="white"
          borderRadius="md"
          boxShadow="md"
          p="2"
          mt="4" // TodoItemとの間隔を追加
          border="2px dashed"
          borderColor="gray.200"
        >
          <Box align="center" justify="center">
            <Icon as={MdAssignmentTurnedIn} w={6} h={6} color="gray.400" mb={0} />
            <Text fontSize="lg" color="gray.500" ml="2">タスクはありません</Text>
          </Box>
        </Box>
      )}

      {/* タスクがある場合の表示 */}
      {todoList.length > 0 && (
        <Box direction="column" alignItems="center" justifyContent="center">
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodoListItemStatus={toggleTodoListItemStatus}
              deleteTodoListItem={deleteTodoListItem}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};