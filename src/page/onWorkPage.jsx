import React from "react";
import { Text, Image, Grid, GridItem, Center, Icon } from "@chakra-ui/react";
import { errorImg } from "../components/img";
import { errorImgPath } from "../components/ImagePath";
import { BsArrowDownRight } from "react-icons/bs";

export default function onWorkPage() {
  return (
    <>
      <Center mx={5} h="68vh">
        <Grid templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(3,1fr)" }}>
          <GridItem
            colSpan={{ base: 1, lg: 2 }}
            fontSize={{ base: "lg", lg: "2xl" }}
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <Text fontWeight="bold">Sorry...</Text>
            <Text fontSize="small">Hover me</Text>
            <Icon as={BsArrowDownRight} ml={5} />
            <Text
              fontSize={{ base: "xl", lg: "6xl" }}
              fontWeight="bold"
              color="yellow"
              textShadow="2px 2px #000"
              letterSpacing={8}
              className="shake-vertical"
            >
              Under construction.
            </Text>
            <Text>Website will be ready soon. Please come back later.</Text>
          </GridItem>

          <GridItem
            mt={{ base: 5, lg: 0 }}
            display="flex"
            justifyContent="center"
          >
            <Image
              w="90%"
              src={errorImg}
              srcSet={errorImg}
              fallbackSrc={errorImgPath}
            />
          </GridItem>
        </Grid>
      </Center>
    </>
  );
}
