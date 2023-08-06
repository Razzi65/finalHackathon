"use client"

import { Badge, Box, Card, CardHeader, CardBody, CardFooter, Heading, Text, Avatar, Flex, VStack } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const ReviewSection = () => {
  const reviews = [
    {
      name: "Customer 1",
      avatar: "https://i.pravatar.cc/150?img=1",
      text: "Loved the trendy fashion products! They offer a great variety of styles and the quality is excellent.",
      badge: "Fashion Enthusiast",
      stars: 5,
    },
    {
      name: "Customer 2",
      avatar: "https://i.pravatar.cc/150?img=2",
      text: "The fashion collection here is amazing! I've found my favorite outfits and I'm always excited to shop.",
      badge: "Style Lover",
      stars: 4,
    },
    {
      name: "Customer 3",
      avatar: "https://i.pravatar.cc/150?img=3",
      text: "Fantastic fashion choices! The latest trends are always available and the prices are reasonable.",
      badge: "Fashionista",
      stars: 5,
    },
    {
      name: "Customer 4",
      avatar: "https://i.pravatar.cc/150?img=4",
      text: "Incredible fashion selection! I'm impressed by the variety and the great deals available.",
      badge: "Fashion Fan",
      stars: 4,
    },
  ];

  return (
    <Box mx="auto" my={6} maxWidth="800px">
          <Heading ms={20} color={"black"}>
      what our customers say
      </Heading>
      <Flex justifyContent="space-between" flexDirection={{ base: "column", md: "row" }}>
        <Card maxW="sm" my={4}>
          <CardBody>
            <Heading size="md">Customer Review</Heading>
            <Avatar name={reviews[0].name} src={reviews[0].avatar} mx="auto" my={2} />
            <Text my={2}>{reviews[0].text}</Text>
            <Badge mt={2} colorScheme="purple">
              {reviews[0].badge}
            </Badge>
          </CardBody>
          <CardFooter>
            {Array.from({ length: reviews[0].stars }, (_, i) => (
              <StarIcon key={i} color="yellow.400" mr={1} />
            ))}
          </CardFooter>
        </Card>
        
        <Card maxW="sm" my={4}>
          <CardBody>
            <Heading size="md">Customer Review</Heading>
            <Avatar name={reviews[1].name} src={reviews[1].avatar} mx="auto" my={2} />
            <Text my={2}>{reviews[1].text}</Text>
            <Badge mt={2} colorScheme="purple">
              {reviews[1].badge}
            </Badge>
          </CardBody>
          <CardFooter>
            {Array.from({ length: reviews[1].stars }, (_, i) => (
              <StarIcon key={i} color="yellow.400" mr={1} />
            ))}
          </CardFooter>
        </Card>
      </Flex>

      <Flex justifyContent="space-between" flexDirection={{ base: "column", md: "row" }}>
        <Card maxW="sm" my={4}>
          <CardBody>
            <Heading size="md">Customer Review</Heading>
            <Avatar name={reviews[2].name} src={reviews[2].avatar} mx="auto" my={2} />
            <Text my={2}>{reviews[2].text}</Text>
            <Badge mt={2} colorScheme="purple">
              {reviews[2].badge}
            </Badge>
          </CardBody>
          <CardFooter>
            {Array.from({ length: reviews[2].stars }, (_, i) => (
              <StarIcon key={i} color="yellow.400" mr={1} />
            ))}
          </CardFooter>
        </Card>
        
        <Card maxW="sm" my={4}>
          <CardBody>
            <Heading size="md">Customer Review</Heading>
            <Avatar name={reviews[3].name} src={reviews[3].avatar} mx="auto" my={2} />
            <Text my={2}>{reviews[3].text}</Text>
            <Badge mt={2} colorScheme="purple">
              {reviews[3].badge}
            </Badge>
          </CardBody>
          <CardFooter>
            {Array.from({ length: reviews[3].stars }, (_, i) => (
              <StarIcon key={i} color="yellow.400" mr={1} />
            ))}
          </CardFooter>
        </Card>
      </Flex>
    </Box>
  );
};

export default ReviewSection;
