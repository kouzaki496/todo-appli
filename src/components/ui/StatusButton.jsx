// StatusButton.js
import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';

const StatusButton = ({ done, onClick }) => {
  return (
    <IconButton
      icon={<FaCheck />}
      colorScheme={done ? 'gray' : 'green'}
      aria-label={done ? '未完了にする' : '完了にする'}
      variant="ghost"
      onClick={onClick}
      mr="2"
      bg={done ? 'gray.300' : 'green.100'} // 背景色を追加
      _hover={{
        color: done ? 'gray.600' : 'green.600',
        bg: done ? 'gray.200' : 'green.200', // ホバー時の背景色を追加
      }}
    size="sm" // ボタンのサイズを指定
    />
  );
};

export default StatusButton;
