import React, { memo } from "react";
import { Button, chakra, Container, Heading, Flex } from '@chakra-ui/react'
import AuthComponent from "../features/AuthComponent";

export const Header = memo(({ title, as }) => {
  const { user } = AuthComponent()
  return (
      <Heading
        width="100vw"
        mb="10"
        pl="10"
        h="20"
        as={as}
        fontSize={ {base: "2xl", md: "4xl" }}
        bg="blue.700"
        color="gray.200"
        display="flex"
        justifyContent="left"
        alignItems="center">
        {title}
    </Heading>
  )
})

