"use client"

import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react'

const Section2 = () => {

    return (
        <>
        <Card align='center'>
  <CardHeader>
    <Heading size='md'> Why choose us?</Heading>
  </CardHeader>
  <CardBody>
    <Text>View a summary of all your customers over the last month.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>Click Here</Button>
  </CardFooter>
</Card>
        </>
    )
}

export default Section2


