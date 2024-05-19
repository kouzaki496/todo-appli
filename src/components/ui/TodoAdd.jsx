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
  <Flex align="center" justify="center" w="full" direction="column">
    <Title title="TODOを追加してください" align="center"/>
      <Flex align="center" justify="space-between" w="full" >
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
    </Flex>
  </>
  )
};

