"use client";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import UseSignIn from "@/customHooks/useSignIn";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setUserEmail, userEmail, setUserPassword, userPassword } =
    UseSignIn();
  const toast = useToast();
  const [jToken, setJtoken] = useState("");

  const onClickHandler = async () => {
    try {
      setIsLoading(true);
      const userSignIn = await axios.post("http://localhost:7000/signIn", {
        email: userEmail,
        password: userPassword,
      });

      setIsLoading(false);

      await setJtoken(userSignIn.data.token);
      await localStorage.setItem("jToken", userSignIn.data.token);

      toast({
        title: "Sign In Successful",
        description: "You have successfully signed in!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setTimeout(() => {
        window.location.href = "/"; // Redirect to home page after successful sign in
      }, 3000); // Adjust the delay as needed
    } catch (error) {
      setIsLoading(false);
      console.log("signIn Error", error);
      toast({
        title: "Error",
        description: "An error occurred while signing in. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  console.log(jToken);

  return (
    <Box bgGradient="linear(to-b, purple.400, gray.800)" minHeight="100vh">
      <Box py="10">
        <Box
          w="80%"
          mx="auto"
          p="8"
          borderRadius="md"
          boxShadow="md"
          width="35%"
          bg="purple.400"
          mt={14}
        >
          <Heading
            as="h2"
            fontSize="xl"
            mb="4"
            textAlign="center"
            color="white"
          >
            Sign In
          </Heading>
          <Text fontSize="md" mb="8" textAlign="center" color="white">
            Welcome back! Please sign in to continue.
          </Text>
          <form>
            <FormControl id="email" mb="4">
              <FormLabel color="white">Email address</FormLabel>
              <Input
                type="email"
                color="black"
                size="sm"
                bg="white"
                placeholder="example@example.com"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" mb="4">
              <FormLabel color="white">Password</FormLabel>
              <Input
                type="password"
                size="sm"
                bg="white"
                color="black"
                placeholder="********"
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </FormControl>
            <Box mx="auto" maxW="200px" mt={8}>
              <Button
                size="md"
                colorScheme="purple"
                w="100%"
                onClick={() => onClickHandler()}
                isLoading={isLoading}
              >
                Sign In
              </Button>
            </Box>
            <Box mt={4} textAlign="center">
              <Link href="/signUp" passHref>
                <Button as="a" size="sm" variant="link" color="white">
                  Don't have an account? Sign Up
                </Button>
              </Link>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
