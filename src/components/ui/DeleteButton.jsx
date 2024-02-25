import React from 'react'
import { DeleteIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup } from '@chakra-ui/react'

export const DeleteButton = () => {
  return (
      <DeleteIcon
      variant="outline"
      color="pink.400"
      ></DeleteIcon>
  )
}

{/* <DeleteIcon
variant="outline"
color="pink.400"
{...props}
></DeleteIcon> */}

export default DeleteButton;