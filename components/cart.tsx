import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Divider,
  Stack,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = () => {
    setCartItems([...cartItems, product]);
    setTotalPrice(totalPrice + product.price);
  };

  return (
    <Box minHeight="100vh" py={10} px={6}>
      <Heading size="xl" mb={4}>
        Shopping Cart
      </Heading>
      <Divider mb={4} />
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {products.map((product) => (
          <GridItem key={product.id}>
            <Box borderWidth="1px" p={4} rounded="md">
              <Heading size="md">{product.title}</Heading>
              <Text>${product.price.toFixed(2)}</Text>
              <Button
                colorScheme="blue"
                size="sm"
                mt={2}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </Button>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Divider mt={4} mb={4} />
      <Heading size="md">Cart Summary</Heading>
      {cartItems.map((item) => (
        <Stack key={item.id} direction="row" justifyContent="space-between">
          <Text>{item.title}</Text>
          <Text>${item.price.toFixed(2)}</Text>
        </Stack>
      ))}
      <Divider mt={2} mb={2} />
      <Stack direction="row" justifyContent="space-between">
        <Text fontWeight="bold">Total Price:</Text>
        <Text>${totalPrice.toFixed(2)}</Text>
      </Stack>
    </Box>
  );
};

export default ShoppingCart;
