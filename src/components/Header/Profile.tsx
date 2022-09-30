import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Danilo Arrotéia</Text>
            <Text color="gray.300" fontSize="small">
              danilo.arroteia@gmail.com
            </Text>
          </Box>

          <Avatar size="md" name="Danilo Arrotéia" src="https://www.github.com/danilo-arroteia.png"/>
        </Flex>
  )
}