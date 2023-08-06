"use client"
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Flex
      bg="purple.400" // Set the background color using theme color
      color="gray.800"
      py={20}
      px={4}
      textAlign="center"
      borderRadius="md"
      boxShadow="lg"
      align="center"
      justify="center"
    >
      {/* Left Part */}
      <Box maxW="500px">
        <Heading as="h1" size="xl" mb={14}>
          Elevate Your Style with the Latest Trends
        </Heading>
        <Text fontSize="xl" mb={6}>
          Discover a wide range of fashionable clothing, shoes, and accessories
          for every occasion.
        </Text>
        <Flex justify="center">
          <Button colorScheme="whiteAlpha" size="lg" mt={10}  >
            Explore Now
          </Button>
        </Flex>
      </Box>

      {/* Right Part */}
      <Box ml={8}>
        <Image
          src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-right.a9b085d9.png&w=750&q=75"
          alt="Fashionable Accessories"
          borderRadius="md"
        />
      </Box>
    </Flex>
  );
};

export default HeroSection;
