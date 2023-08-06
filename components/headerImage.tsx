import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const HeaderImage = () => {
  return (
    <Box position="relative">
      <Image
        src="https://img.freepik.com/free-photo/young-man-shopping-menswear-store-talking-phone_1303-31006.jpg?w=1060&t=st=1691312153~exp=1691312753~hmac=ef2b59d27c6973b8743101f642a252378bd121d628b9f3199d24dcba186ccd4b"
        alt="Collection"
        width="100%"
        height={250}
        objectFit="cover"
        borderTopRadius="lg"
        borderBottomRadius="lg"
        opacity="0.7"
      />
      <Box
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        bg="rgba(255, 255, 255, 0.7)"
        p={2}
      >
        <Text fontSize="xl" fontWeight="bold" color="purple">
          OUR COMPLETE COLLECTION
        </Text>
      </Box>
    </Box>
  );
};

export default HeaderImage;
