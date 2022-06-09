import React from "react";
import { Loading } from "../components/lottie";
import { Box, Image, Center, Text } from "@chakra-ui/react";
import { loadingImg } from "../components/img";
import { loadingPath } from "../components/ImagePath";

export default function LoadingPage() {
  return (
    <>
      <Center
        h="100vh"
        p={5}
        alignContent="center"
        flexDirection="column"
        position="relative"
      >
        <Image
          className="shake"
          src={loadingImg}
          srcSet={loadingImg}
          fallbackSrc={loadingPath}
          pl={20}
        />
        <Box position="absolute" w="80vw" mt="30vh">
          <Loading h="100%" w="100%" />
        </Box>
      </Center>
    </>
  );
}
