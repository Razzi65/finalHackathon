"use client";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import UseSignup from "@/customHooks/useSignUp";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";

const SignUpForm = () => {
  const { SetNewEmail, setNewPassword, newPassword, newEmail } = UseSignup();
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const onClickHandler = async () => {
    try {
      setIsLoading(true);
      const sendData = await axios.post("http://localhost:7000/signUp", {
        email: newEmail,
        password: newPassword,
      });

      if (!newEmail || !newPassword) {
        toast({
          title: "Could not create account",
          description: "Please provide valid email and password.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Account created.",
          description: "Your account has been successfully created!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        // Redirect to sign-in page after 3 seconds
        setTimeout(() => {
          window.location.href = "/signIn";
        }, 3000);
      }
    } catch (error) {
      console.log("Error in axios:", error);
      toast({
        title: "An error occurred",
        description: "There was an error while creating your account.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box bgGradient="linear(to-b, purple.400, gray.800)" minHeight="100vh">
      <Box py="10">
        <Box
          mt={14}
          w="80%"
          mx="auto"
          p="8"
          borderRadius="md"
          boxShadow="md"
          width="35%"
          bg="purple.400"
        >
          <Heading
            as="h2"
            fontSize="xl"
            mb="4"
            textAlign="center"
            color="white"
          >
            Create an Account
          </Heading>
          <Text fontSize="md" mb="8" textAlign="center" color="white">
            Join our community and get access to exclusive features!
          </Text>
          <form>
            <FormControl id="email" mb="4">
              <FormLabel color="white">Email address</FormLabel>
              <Input
                type="email"
                size="sm"
                bg="white"
                color="black"
                placeholder="example@example.com"
                onChange={(e) => SetNewEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" mb="4">
              <FormLabel color="white">Password</FormLabel>
              <Input
                type="password"
                size="sm"
                bg="white"
                placeholder="********"
                color="black"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </FormControl>
            <FormControl id="confirm-password" mb="4"></FormControl>
            <Flex direction="column" align="center">
              <Box maxW="100px">
                {isLoading ? (
                  <Spinner color="purple.500" />
                ) : (
                  <Button
                    size="md"
                    colorScheme="purple"
                    onClick={() => onClickHandler()}
                  >
                    Sign Up
                  </Button>
                )}
              </Box>
              <Link href="/signIn">
                <Button as="a" mt={2} size="sm" color="white" variant="link">
                  Already have an account? Sign In
                </Button>
              </Link>
            </Flex>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpForm;
