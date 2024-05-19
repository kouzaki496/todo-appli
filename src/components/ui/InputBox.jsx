import React, { forwardRef } from 'react';
import { Input } from "@chakra-ui/react";

export const InputBox = forwardRef(({ todoTextRef, onKeyPress }, ref) => {
  return (
    <Input
      className='todoInput'
      placeholder="〇〇をする"
      ref={todoTextRef}
      variant="unstyled"
      size="sm"
      bg="white"
      borderWidth="1px"
      borderRadius="md"
      p="2"
      m="1"
      boxShadow="md"
      _focus={{ borderColor: "pink.400" }}

      onKeyPress={onKeyPress}
    />
  );
});

export default InputBox;