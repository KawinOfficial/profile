import React from "react";
import { Box, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { PageCover } from "../components/AboutMe";

export default function AboutMePage() {
  return (
    <>
      <Center h="100vh">
        <PageCover />
      </Center>

      <Box h="95vh" border="1px">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Second page Testing motion
        </motion.div>
      </Box>

      <Box h="95vh" border="1px">
        Third page
      </Box>
    </>
  );
}
