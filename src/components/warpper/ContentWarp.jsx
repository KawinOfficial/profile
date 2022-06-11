import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function ContentWarp({ content: Content }) {
  return (
    <>
      <Nav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Content />
        <Footer />
      </motion.div>
    </>
  );
}
