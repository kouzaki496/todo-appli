import React, { memo } from "react";
import { chakra, Heading, Flex, Box, Text} from '@chakra-ui/react'
import AuthComponent from "../feature/AuthComponent";

export const Header = memo(({ title, as }) => {
  const { user } = AuthComponent()
  return (
    <>
      <Heading
        width="100vw"
        mb="10"
        pl="10"
        h="20"
        as={as}
        fontSize={ {base: "2xl", md: "4xl" }}
        color="gray.200"
        bg="blue.700"
        display="flex"
        justifyContent="left"
        alignItems="center">{title}
      </Heading>
    </>
  )
})


