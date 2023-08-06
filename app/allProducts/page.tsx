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

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:7000/getAllProducts");
      setAllProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const onClickHandler = async (productID) => {
    const token = await localStorage.getItem("jToken");

    const sendData = await axios.post(
      "http://localhost:7000/addToCart",
      {
        productId: productID,
      }
    );

    console.log(sendData.data);
  };

  return (
    <Box minHeight="100vh" py={10} px={6}>
      <HeaderImage />
      <Text fontSize="md">Brand new fabrics are added every month</Text>

      <Grid templateColumns="repeat(4, 1fr)" gap={4} justifyItems="center">
        {allProducts.map((product) => (
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
              <CardFooter>
                <Button
                  colorScheme="blue"
                  variant="ghost"
                  size="sm"
                  onClick={() => onClickHandler(product._id)}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default AllProducts;
