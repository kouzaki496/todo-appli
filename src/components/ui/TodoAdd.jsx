import React from 'react'
import { AddButton } from "./AddButton"
import { Title } from "./Title";
import { InputBox } from "./InputBox";
import { AddIcon } from '@chakra-ui/icons'


import { Box, Container, Text, List, ListItem, Flex, Button, IconButton, Input } from "@chakra-ui/react";

export const TodoAdd = ({
  buttonText,
  todoTextRef,
  handleAddTodoListItem,
}) => {
  return (
  <>
      <Title title="TODOを追加してください" />
      <Flex align="center" justify="flex-end" w="full">
        <input
          placeholder="〇〇をする"
          ref={todoTextRef}
          type="text"
          bgColor="White"
          borderColor="gray.300"
          focusBorderColor="pink.400"
          m="10" />
        <IconButton
          onClick={handleAddTodoListItem}
          icon={<AddIcon />}
          bg="blue.600"
          color="white"
        ></IconButton>
      </Flex>
  </>
  )
};

