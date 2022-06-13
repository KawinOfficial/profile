import React from "react";
import { Text, Image, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CoverOver } from "../img";
import { coverOverPath } from "../ImagePath";
import Tilt from "react-parallax-tilt";
import "./Style.css";

export default function PageCover() {
  return (
    <>
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
        gap={14}
        pb={{ lg: "15vh" }}
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
              h={{ base: "48vh", lg: "60vh" }}
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
          <Text fontWeight="extrabold" color="yellow" fontSize="8xl">
            KawinS
          </Text>
          <Text>Front-End Developer and Photographer</Text>
        </GridItem>
      </Grid>
    </>
  );
}
