import React, { memo } from "react";
import { Heading, Flex, Button, Box, Text } from '@chakra-ui/react'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

export const Header = memo(({ title, as, user, handleSignOut, handleSignIn }) => {
  return (
    <Flex
      as="header"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      p={4}
      bg="blue.700"
      color="white"
    >
      <Heading as = {as} > {title} </Heading>
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


