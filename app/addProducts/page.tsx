"use client";

import { Input, Button, VStack, Box, Grid, Heading } from "@chakra-ui/react";
import axios from "axios";
import UseAdditems from "@/customHooks/useAddProducts";
import { useToast } from "@chakra-ui/react";

const AddProducts = () => {
  const {
    name,
    setName,
    category,
    setCategory,
    description,
    setDescription,
    price,
    setPrice,
    color,
    setColor,
    size,
    setSize,
    images,
    setImages,
    rating,
    setRating,
    review,
    setReview,
    stock,
    setStock,
  } = UseAdditems();

  const toast = useToast();

  const onClickHandler = async () => {
    try {
      const addedItem = await axios.post("http://localhost:7000/addProducts", {
        name: name,
        category: category,
        description: description,
        price: price,
        color: color,
        size: size,
        images: images,
        rating: rating,
        review: review,
        stock: stock,
      });

      toast({
        title: "Product Added",
        description: "The product has been successfully added!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Clear input fields on success
      setName("");
      setCategory("");
      setDescription("");
      setPrice("");
      setColor("");
      setSize("");
      setImages("");
      setRating("");
      setReview("");
      setStock("");
    } catch (error) {
      console.log("axios added item error", error);
      toast({
        title: "Error",
        description: "An error occurred while adding the product.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing={4} align="center" py={10}>
      <Box
        p={6}
        borderRadius="md"
        boxShadow="lg"
        width="100%"
        maxW="800px"
        color="black"
        bg={"purple.200"}
      >
        <Heading size="lg" textAlign="center" mb={4}>
          Add New Product
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <Input
            placeholder="Name"
            size="md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Category"
            size="md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Input
            placeholder="Description"
            size="md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            placeholder="Price"
            size="md"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            placeholder="Color"
            size="md"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <Input
            placeholder="Size"
            size="md"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <Input
            placeholder="Images (comma-separated URLs)"
            size="md"
            value={images}
            onChange={(e) => setImages(e.target.value)}
          />
          <Input
            placeholder="Rating"
            size="md"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <Input
            placeholder="Review"
            size="md"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <Input
            placeholder="Stock"
            size="md"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </Grid>
        <Button onClick={() => onClickHandler()} colorScheme="blue" mt={4}>
          Submit
        </Button>
      </Box>
    </VStack>
  );
};

export default AddProducts;
