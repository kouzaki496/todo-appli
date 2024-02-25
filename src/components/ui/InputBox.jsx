import React, { memo } from "react";
import { Input } from "@chakra-ui/react";

export const InputBox = () => {
  return (
    <Input
      bgColor="white"
      borderColor="gray.300"
      focusBorderColor="pink.400"
      m="4"
      placeholder="〇〇をする"
      >
    </Input>
  )
}
