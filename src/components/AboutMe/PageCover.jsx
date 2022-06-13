import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Cover } from "../img";
import { coverPath } from "../ImagePath";
import Tilt from "react-parallax-tilt";
import "./Style.css";

export default function PageCover() {
  return (
    <>
      <Box>
        <Tilt
          className="cover-image "
          glareEnable={true}
          glareMaxOpacity={0.45}
          //  tiltMaxAngleX={40}
          //  tiltMaxAngleY={40}
          //  perspective={800}
          //  transitionSpeed={1500}
          //  scale={1.1}
          //  gyroscope={true}
        >
          <Image className="inner-element" src={Cover} />
        </Tilt>
      </Box>
    </>
  );
}
