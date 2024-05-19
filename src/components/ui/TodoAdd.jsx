import React from 'react'
//import Component
import { Title } from "./Title";
import { InputBox } from "./InputBox";
//Chakra
import { AddIcon } from '@chakra-ui/icons'
import { Flex, Box, IconButton, Input } from "@chakra-ui/react";

export const TodoAdd = ({todoTextRef, handleAddTodoListItem }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodoListItem();
    }
  };

  return (
  <>
    <Title title="TODOを追加してください" />
    <Flex align="center" justify="flex-end" w="full" >
      <InputBox todoTextRef={todoTextRef} onKeyPress={handleKeyPress} />
      <IconButton
        onClick={handleAddTodoListItem}
        icon={<AddIcon />}
        bg="blue.600"
        color="white"
        ml="2"
        borderRadius="md"
        boxShadow="md"
        _hover={{ bg: "blue.500" }} // ホバー時のスタイル
        _active={{ bg: "blue.700" }} // クリック時のスタイル

      ></IconButton>
    </Flex>
  </>
  )
};

