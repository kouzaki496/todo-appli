import React from 'react'
import { FaCheck } from 'react-icons/fa'; // FaCheckをインポートする
//import Component
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";
import { CustomButton } from './Button'; // インポート名を修正
import { Button } from './Button';
//Chakra
import { Flex, Text, Center, Box, Icon } from "@chakra-ui/react";

//コンポーネント：TODOアイテム
export const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem}) => {

  const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

  return (
    <Box
      boxShadow="md"
      borderRadius="md"
      // width={{ base: "95vw", md: "80vw", xl: "38vw" }}
      w="full"
      p="2"
      mt="4"
      bg={todo.done ? 'gray.100' : 'white'}
    >
      <Flex align="center" justify="space-between">
      <Text ml={4}>
        {todo.content}
      </Text>
      <Flex justify="flex-end" alignItems="center">
        {/* ステータスボタン */}
        <CustomButton
            icon={<FaCheck />}
            onClick={handleToggleTodoListItemStatus}
            bg={todo.done ? 'gray.300' : 'green.100'}
            color={todo.done ? 'gray.500' : 'green.500'}
            hoverBg={todo.done ? 'gray.400' : 'green.200'}
            hoverColor={todo.done ? 'gray.600' : 'green.600'}
          />
          {/* 削除ボタン */}
          <CustomButton
            icon={<DeleteIcon color="pink.500" />}
            onClick={handleDeleteTodoListItem}
            bg={todo.done ? 'gray.300' : 'pink.100'}
            hoverBg={todo.done ? 'gray.400' : 'pink.200'}
            hoverColor="pink.600"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default TodoItem