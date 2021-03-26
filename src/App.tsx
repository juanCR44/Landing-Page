import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  ColorModeProvider,
  Flex,
  Image,
  Center,
  Wrap,
  WrapItem,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  GridItem,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from "@chakra-ui/react"

import IconosCandidatos from "./iconos-candidatos"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

interface user{
  dni:string
}

function retrieveDNI(dni:any){
  console.log(dni);
}
function prueba(){
  console.log("jeje")
}

export const App = () => (

  <ChakraProvider theme = {theme}>
    <Flex  justifyContent = "center" backgroundColor = "gray.100"  height = "100vh">
      <Box marginTop = "50px"  boxShadow="dark-lg" p="0" rounded="md"  position = "absolute">
        <Box
          height = "620px"
          width = "1000px"
          backgroundImage = "url(https://i.pinimg.com/originals/06/55/80/065580938b36e4c049ec033745248216.jpg)"
          padding = "15px"
          position = "relative"
        >
          <Grid 
            position = "relative"
            height = "585px"
            templateRows = "repeat(3, 1fr)"
            templateColumns = "repeat(2, 1fr)"
            gap = {4}>
              <GridItem rowSpan={1}>
              <Text 
                fontSize = "38px"
                fontWeight = "700"
                fontFamily = "body">
                Onpe
              </Text>
              </GridItem>
              <GridItem rowSpan={2} colSpan={1}>
                <Center marginTop="50px">
                  <Image src = "/images/anfora.png" alt = "" boxSize = "320px">
                  </Image>
                </Center> 
              </GridItem>
              <GridItem rowSpan={3} colSpan={1}>
                <Box padding = "10px" color = "white">
                  <Text fontSize = "28px" fontWeight = "600">Elecciones generales 2021</Text>
                </Box>
                <Box padding = "10px" color = "white">
                  <Text>Ingrese su número de DNI para empezar a votar</Text>
                </Box>
                <Box padding = "10px" color = "black">
                  <FormControl id = "DNI" display = "inline-flex">
                    <Input type="text" placeholder = "DNI" variant="outline" bg = "white" ref={(c) => retrieveDNI(c)}/>
                    <Button marginLeft = "10px" bg = "cyan.200" type="submit" onClick = {()=>prueba()}>
                      Continuar
                    </Button>
                  </FormControl>
                </Box>
              </GridItem>
          </Grid>
        </Box>
        <Box backgroundColor = "white" height= "250px" padding = "10px" position = "relative">
          <Text 
            color = "black" 
            position = "relative"
            fontFamily = "serif"
            fontSize = "26px"
            fontWeight = "bold">
              Candidatos
          </Text>
          <Box 
            overflowY="auto" 
            height = "190px" 
            width= "980px" 
            outline = "auto" 
            outlineColor = "gray.200" 
            padding = "5px" 
            bg = "orange.400"
            css={{
              '&::-webkit-scrollbar': {
                width: '12px',
              },
              '&::-webkit-scrollbar-track': {
                width: '6px',
                background: "#f1f1f1"
              },
              '&::-webkit-scrollbar-thumb': {
                background: "lightblue",
                borderRadius: '24px',
              },
              }
            }>
            <IconosCandidatos/>
          </Box>
        </Box>
      </Box>
    </Flex>

  </ChakraProvider>
)

