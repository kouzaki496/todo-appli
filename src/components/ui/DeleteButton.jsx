import React from 'react';
import { DeleteIcon } from "@chakra-ui/icons";
import { IconButton } from '@chakra-ui/react'

export const DeleteButton = ({ onClick, done, ...props }) => {
  return (
    <IconButton
      colorScheme="gray"
      aria-label="削除"
      size="sm"
      variant="gohst"
      color="pink.500"
      bg={done ? 'gray.300' : 'pink.100'}
      // borderColor={done ? 'gray.300' : 'pink.400'}
      _hover={{
        bg: done ? 'gray.200' : 'pink.200', // ホバー時の背景色を追加
      }}
      icon={<DeleteIcon />} // leftIcon プロパティを使ってアイコンを追加する
      onClick={onClick}
      {...props}
    />
  )
}

export default DeleteButton;
