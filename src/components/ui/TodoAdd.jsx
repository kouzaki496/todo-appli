import React from 'react'
//import Component
import { Title } from "./Title";
//Chakra
import { AddIcon } from '@chakra-ui/icons'
import { Flex,  IconButton } from "@chakra-ui/react";

export const TodoAdd = ({todoTextRef, handleAddTodoListItem }) => {
  return (
  <>
    <Title title="TODOを追加してください" />
    <Flex align="center" justify="flex-end" w="full" >
      <input className='todoInput'
        placeholder="〇〇をする"
        ref={todoTextRef}
        type="text"
        />
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

