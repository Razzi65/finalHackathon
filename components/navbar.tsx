"use client";
// components/Navbar.js
import { Flex, Button, Link as ChakraLink } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useToast } from "@chakra-ui/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Navbar = () => {
  const router = useRouter();
  const [token, setToken] = useState('')
  useEffect(() => {
    setTokenFromStorage()
  }, []);

  const setTokenFromStorage = async()=>{
    const tok = await localStorage.getItem("jToken");
    setToken(tok);
  }

  const toast = useToast()
  const handleSignOut = () => {
    localStorage.removeItem("jToken"); // Remove the user token from local storage
    setToken(""); // Clear the token in the state
    toast({
      title: "Signed Out",
      description: "You have been successfully signed out.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
      };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-evenly"
      p={2}
      color="white"
    >
      <ChakraLink href="/" color="black">Home</ChakraLink>
      <ChakraLink href="/allProducts" color="black">All Products</ChakraLink>
      <ChakraLink href="/men" color="black">Men</ChakraLink>
      {/* <ChakraLink href="/" color="black">Women</ChakraLink> */}

      <Flex align="center">
        {(!token) ? (
          <>
            <Button onClick={() => router.push("/signUp")} mr={4} variant="ghost" colorScheme="purple">
              Sign Up
            </Button>
            <Button onClick={() => router.push("/signIn")} mr={4} colorScheme="purple">
              Sign In
            </Button>
          </>
        ) : (
          <>
            <Button onClick={() => router.push("/addProducts")} mr={4} colorScheme="purple">
              Add Product
            </Button>
            <Button onClick={()=>handleSignOut()}>Sign out</Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
