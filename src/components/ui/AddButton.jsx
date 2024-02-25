import React from 'react'
//import Component
import { IconButton } from '@chakra-ui/react'
//Chakra
import { AddIcon } from '@chakra-ui/icons'

export const AddButton = () => {
  return (
    <IconButton
      width="100"
      bg="blue.600"
      color="white"
      p={2}
      boxSize="10"
      rounded="md"
      icon={<AddIcon />}
    />
  );
};

export default AddButton;