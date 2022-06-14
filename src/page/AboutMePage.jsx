import React from "react";
import { Box, Center } from "@chakra-ui/react";
import { PageCover, EducationPage } from "../components/AboutMe";

export default function AboutMePage() {
  return (
    <>
      <Center h="100vh">
        <PageCover />
      </Center>

      <Center h="100vh" bgGradient="linear(to-r, #2BC0E4, #EAECC6)">
        <EducationPage />
      </Center>

      <Box h="100vh">Third page</Box>
    </>
  );
}
