import React, { memo } from "react";
import { Heading, Flex, Button, Box, Text, useBreakpointValue } from '@chakra-ui/react'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

export const Header = memo(({ title, as, user, handleSignOut, handleSignIn }) => {
  const isMobile = useBreakpointValue({ base: true, md: false }); // モバイルかどうかを判定
  return (
    <Flex
      as="header"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      p={4}
      bg="blue.700"
      color="white"
      fontSize={isMobile ? "sm" : "lg"}
    >
      <Heading as = {as} mb={isMobile ? 2 : 0} fontSize={isMobile ? "xl" : "4xl"}> {title} </Heading>
      <Box textAlign="right">
        {user && (
          <Text mb={2}>
            {user.displayName}さんがログイン中です
          </Text>
        )}
        {user ? (
          <Button
            onClick={handleSignOut}
            colorScheme="teal"
            fontSize={isMobile ? "sm" : "lg"}
            leftIcon={<FaSignOutAlt />}
          >
            ログアウト
          </Button>
          ) : (
            <>
              <Text mb={2}>ログインしてください</Text>
              <Button
                onClick={handleSignIn}
                colorScheme="pink"
                fontSize={isMobile ? "sm" : "lg"}
                leftIcon={<FaSignInAlt />}
              >
                Google認証
              </Button>
            </>
          )}
        </Box>
      </Flex>
  )
})


