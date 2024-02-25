import React from 'react'
import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled';


export const BaseButton = styled.button`
  text-align: center;
  color: white;
  width: 100%;
  min-width: 100px;
`;
const ButtonPrimary = styled(BaseButton)`
  background: green;
`;

const ButtonDanger = styled(BaseButton)`
  background: red;
`;

// 全ボタンコンポーネント
const buttonStyleLists = {
  default: BaseButton,
  primary: ButtonPrimary,
  danger: ButtonDanger,
};

// propsのstyleTypeでボタンのスタイルを分岐
const BaseButton = ({ styleType, onClick, child }) => {
  const Component = buttonStyleLists[styleType] || buttonStyleLists.default;
  // Component変数に格納したコンポーネントでReact要素を作成
  return <Component onClick={onClick}>{child}</Component>;
};


export default BaseButton;