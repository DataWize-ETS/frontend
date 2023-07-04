import { Flex, Box, Center, FormControl, Input, FormLabel, HStack, Select, Button } from "@chakra-ui/react"

function Outro() {
    return (
        <Box minH={"100vh"} m={10}>

            <Flex
                align="center"
                justify="center"
                bg="blackAlpha.200"
                h="calc(100vh - 150px"
            >
                <Center
                    w="100%"
                    maxW={840}
                    bg="white"
                    top={100}
                    position="absolute"
                    borderRadius={5}
                    p="6"
                    boxShadow="0 1px 2px #ccc"
                    m="5"
                >
                    <FormControl display="flex" flexDir="column" gap="4" >

                        <HStack>
                            <Box w="100%">
                                <FormLabel htmlFor="assigne">Assigne</FormLabel>
                                <Input id="assigne" />
                            </Box>
                            <Box w="100%" style={{ display: "flex", flexDirection: "column" }}>
                                <FormLabel htmlFor="dep">Department</FormLabel>
                                <Select placeholder='Select option' id="dep">
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                            </Box>
                        </HStack>
                        
                        <Center>
                            <Box>
                                <Button w={240} p="6" type="submit" bg="green.400" color="white" fontWeight="bold" fontSize="xl" m="4" _hover={{ bg: "green.500" }}>Save Improve</Button>
                            </Box>
                        </Center>

                    </FormControl>
                </Center>
            </Flex>
        </Box>


    );
}

export default Outro