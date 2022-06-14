import React from "react";
import { Text, Image, Grid, GridItem, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CoverOver } from "../img";
import { coverOverPath } from "../ImagePath";
import Tilt from "react-parallax-tilt";
import "./Style.css";
import { Scroll } from "../lottie";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 3 } },
};

export default function PageCover() {
  return (
    <>
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
        gap={14}
        pb={{ lg: "10vh" }}
      >
        <GridItem
          px={10}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Tilt
            className="cover-image "
            glareEnable={true}
            glareMaxOpacity={0.45}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
          >
            <Image
              className="inner-element"
              src={CoverOver}
              srcSet={CoverOver}
              fallbackSrc={coverOverPath}
              h={{ base: "48vh", lg: "64vh" }}
            />
          </Tilt>
        </GridItem>

        <GridItem
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems={{ base: "center", lg: "end" }}
          mb={10}
        >
          <Text
            className="text-cover shake "
            color="blue.500"
            fontSize={{ base: "5xl", lg: "7xl" }}
            textShadow="2px 2px 5px rgba(0,0,0,0.2)"
          >
            KawinOfficial
          </Text>
          <Text>Front-End Developer and Photographer</Text>
        </GridItem>
      </Grid>

      <Box position="absolute" mt="80vh" textAlign="center" opacity={0.8}>
        <motion.div variants={variants} initial="hidden" animate="visible">
          <Scroll w="40%" />
          <Text fontWeight="bold" fontSize="x-small">
            Portfolio
          </Text>
          <Text fontSize="xx-small">Scroll Down</Text>
        </motion.div>
      </Box>
    </>
  );
}
