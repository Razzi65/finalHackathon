"use client"
import { Box, Flex, Text, Link, Icon, Input, Button, Heading } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    
    <Box bg="gray.800" py={10} color="white">
              

      <Flex direction={{ base: 'column', md: 'row' }} justify="space-evenly" align="flex-start">
        {/* Column 1 */}
        <Box p={4}>
          <Text fontSize="sm" fontWeight="normal" mb={3}>MEN</Text>
          <Text fontSize="sm" fontWeight="normal" mb={3}>WOMEN</Text>
          <Text fontSize="sm" fontWeight="normal" mb={3}>KIDS</Text>
        </Box>

        {/* Column 2 */}
        <Box p={4} mt={{ base: 4, md: 0 }}>
          <Text fontSize="sm" fontWeight="normal" mb={3}>ABOUT US</Text>
          <Text fontSize="sm" fontWeight="normal" mb={3}>PRIVACY POLICY</Text>
          <Text fontSize="sm" fontWeight="normal" mb={3}>CONTACT US</Text>
        </Box>

        {/* Column 3 */}
        <Box p={4} mt={{ base: 4, md: 0 }}>
          <Flex direction="row" mb={3}>
            <Link href="#" mx={2}><Icon as={FaFacebook} boxSize={5} /></Link>
            <Link href="#" mx={2}><Icon as={FaTwitter} boxSize={5} /></Link>
            <Link href="#" mx={2}><Icon as={FaInstagram} boxSize={5} /></Link>
          </Flex>
          <Text fontSize="sm" fontWeight="normal" mb={3}>Subscribe to our newsletter</Text>
          <Text fontSize="sm" fontWeight="normal" mb={3}>Stay updated with the latest trends and offers.</Text>
          <Flex mt={4}>
            <Input placeholder="Enter your email" mr={2} />
            <Button colorScheme="purple" size="sm">
              Subscribe
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box></>
  );
};

export default Footer;
