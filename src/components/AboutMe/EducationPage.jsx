import React from "react";
import { Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function EducationPage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Text fontSize="5xl" fontWeight="bold" className="shake ">
          AboutMe
        </Text>
      </motion.div>
    </>
  );
}
