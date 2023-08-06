"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import HeaderImage from "@/components/headerImage";

const Men = () => {
  const [menProducts, setMenProducts] = useState([]);

  useEffect(() => {
    fetchMenProducts();
  }, []);

  const fetchMenProducts = async () => {
    try {
      const response = await axios.get("http://localhost:7000/getMenProducts");
      setMenProducts(response.data);
    } catch (error) {
      console.error("Error fetching men products:", error);
    }
  };

  return (
    <Box minHeight="100vh" py={10} px={6}>
      <HeaderImage />
      <Text fontSize="md">Brand new fabrics for men</Text>

      <Grid templateColumns="repeat(4, 1fr)" gap={4} justifyItems="center">
        {menProducts.map((product) => (
          <GridItem key={product._id}>
            <Card maxW="sm" borderColor="purple.200" borderWidth="2px">
              <Image
                src={product.images} // Update with your image URLs
                alt={product.name}
                borderRadius="sm"
                boxSize="200px" // Add this line to set a fixed size for the image
                objectFit="cover"
              />
              <CardBody>
                <Heading size="sm" mt="3">
                  {product.name}
                </Heading>
                <Text fontSize="md" color="gray.600">
                  {product.description}
                </Text>
                <Text fontSize="sm" color="gray.400">
                  Size: {product.size}
                </Text>
                <Text fontSize="lg" fontWeight="bold" mt="2">
                  ${product.price}
                </Text>
              </CardBody>
              <Divider />
              {/* Commented out the CardFooter and Button */}
              {/* <CardFooter>
                <Button
                  colorScheme="blue"
                  variant="ghost"
                  size="sm"
                  onClick={() => onClickHandler(product._id)}
                >
                  Add to Cart
                </Button>
              </CardFooter> */}
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Men;
