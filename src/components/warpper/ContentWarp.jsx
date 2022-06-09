import React from "react";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function ContentWarp({ content: Content }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Content />
      </motion.div>

      <Footer />
    </>
  );
}
