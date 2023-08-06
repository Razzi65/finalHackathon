"use client"
import { Box, Card, Flex, CardBody, CardFooter, Image, Heading, Stack, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react';

const Section3 = () => {
  return (
    <Box py={8}>
      <Heading ms={20} textColor={"black"}>Discover more. Buy more...</Heading>
      <Flex justify="space-around" mt={10} >
        {/* Card 1 */}
        <Card maxW='sm'>
          <CardBody>
            <Image
              src="https://img.freepik.com/free-photo/online-fashion-shopping-with-computer_23-2150400628.jpg?w=1060&t=st=1691302336~exp=1691302936~hmac=8c506ca80fef4c137912f77800b28d1878ac739c377d0317655c45517f0761ef"
              alt='Latest Brands'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Shop the Latest Brands</Heading>
              <Text>
                Explore a curated selection of the latest brands in fashion,
                offering a diverse range of styles and trends.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup>
              <Button variant='solid' colorScheme='purple' size='sm' borderRadius='full'>
                Explore More
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        {/* Card 2 */}
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://img.freepik.com/free-photo/positive-black-woman-chooses-sweater-buy-holds-hanger-with-purple-turtleneck-mobile-phone-other-hand_273609-39230.jpg?w=1060&t=st=1691302571~exp=1691303171~hmac=af8d3bce53ac57b7c3a5adab3c821b8a77773ca425f8fd091240211504c17aab'
              alt='Easy Shopping Experience'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Easy Shopping Experience</Heading>
              <Text>
                Enjoy a hassle-free shopping experience with our user-friendly website,
                convenient payment options, and fast delivery.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup>
              <Button variant='solid' colorScheme='purple' size='sm' borderRadius='full'>
                Explore More
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        {/* Card 3 */}
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://img.freepik.com/free-photo/fashionable-young-bearded-man-oversized-grey-t-shirt-jeans-poses-indoors-against-blank-wall_273609-17015.jpg'
              alt="Men's Fashion"
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Men's Fashion</Heading>
              <Text>
                Elevate your style with our collection of trendy and comfortable
                men's fashion, from classic essentials to modern statement pieces.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup>
              <Button variant='solid' colorScheme='purple' size='sm' borderRadius='full'>
                Explore More
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Flex>
    </Box>
  );
};

export default Section3;
