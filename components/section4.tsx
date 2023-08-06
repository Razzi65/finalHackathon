"use client";
import axios from "axios";
import { Grid, GridItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Divider,
  Text,
} from "@chakra-ui/react";

const Section4 = () => {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`http://localhost:7000/getAllProducts`);
      console.log(response.data);
      setAllEvents(response.data.slice(0, 8)); // Displaying only 8 items
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <>
      <Heading ms={20} color={"black"}>
        Our latest fashion designs
      </Heading>

      <SimpleGrid columns={4} spacing={6} mt={6} mx={20}>
        {allEvents.map((items) => (
          <Box key={items._id}>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={items.images}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg" // Make photos rounded
                  boxSize="200px" // Add this line to set a fixed size for the image
                 objectFit="cover"
                  
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" color={"purple.600"}>
                     {items.name}
                  </Heading>
                  <Text>{items.description}</Text>
                  <Text>Location: {items.location}</Text>
                </Stack>
              </CardBody>
              <Divider />
             
            </Card>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Section4;
