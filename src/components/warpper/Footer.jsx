import React from "react";
import { Wave } from "../lottie";
import {
  Text,
  Box,
  Grid,
  GridItem,
  Image,
  Icon,
  Center,
  useDisclosure,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Button,
  Link,
} from "@chakra-ui/react";
import { footerImg } from "../img";
import { footerImgPath } from "../ImagePath";
import { bgFooter } from "../img";
import { bgWavePath } from "../ImagePath";

import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaGithub, FaLine } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const iconLink = [
  {
    icon: FaGithub,
    name: "KawinOffcial",
    link: "https://github.com/KawinOfficial",
  },
  {
    icon: BsFacebook,
    name: "Kawin Srisomphan",
    link: "https://facebook.com/kawin.srisompharn",
  },
  {
    icon: BsInstagram,
    name: "_kawin_s",
    link: "https://instagram.com/kawinsrisompharn",
  },
  { icon: FaLine, name: "twotonekor", link: "" },
  { icon: MdMail, name: "kawin.sris@gmail.com", link: "" },
];

function SayHi({ mt, ml }) {
  return (
    <>
      <Box mt={mt} ml={ml} fontSize="sm">
        <Text fontSize="lg" mb={2} fontWeight="semibold">
          Oh Hello...
        </Text>
        <Text mt={3}>
          I am Kawin Srisomphan. I am a <b>Front-end developer</b> ,
          <b> UX/UI designer</b> and also Photographer base on Thailand.
        </Text>
        <Text>
          Thank you for coming to my website.I am looking forward to work with
          you. ^^
        </Text>
      </Box>
    </>
  );
}

function Contact({ ml }) {
  return (
    <>
      <Text
        className="text-rotate"
        color="blue.500"
        mt={5}
        position="absolute"
        fontWeight="bold"
      >
        Let's Contact / ติดต่อ
      </Text>

      <Grid templateColumns="repeat(6,1fr)" ml={ml} position="absolute">
        {iconLink.map((info, i) => (
          <React.Fragment key={i}>
            <GridItem mt={2} textAlign="end" pt={1} pr={5}>
              <Icon as={info.icon} />
            </GridItem>

            <GridItem colSpan={5} mt={2}>
              <Link href={info.link} target="_blank" className="shake">
                {info.name}
              </Link>
            </GridItem>
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
}

export default function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const screen = useBreakpointValue({ base: true, lg: false });

  return (
    <>
      {screen ? (
        <React.Fragment>
          <Box mt="21vh" h="11vh" position="relative" textAlign="center">
            <Wave />
            <Button onClick={onOpen} rounded="full" bgColor="#eee">
              <Text>Need Contact?</Text>
              <Text fontWeight="light" ml={2}>
                click me!
              </Text>
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <Box
          position="relative"
          pt={1}
          overflowY="hidden"
          overflowX="auto"
          minH="300px"
          h="30vh"
        >
          <Wave />
          <Image
            position="absolute"
            zIndex={-4}
            height="100%"
            width="100%"
            mt={5}
            minW="100px"
            src={bgFooter}
            srcSet={bgFooter}
            fallbackSrc={bgWavePath}
          />

          <Grid
            templateColumns="repeat(3,1fr)"
            pt={16}
            px={{ base: 2, lg: 10 }}
          >
            <GridItem colSpan={2} display="flex">
              <Image
                src={footerImg}
                srcSet={footerImg}
                fallbackSrc={footerImgPath}
                h="80%"
                position="absolute"
              />
              <SayHi mt={20} ml={32} />
            </GridItem>
            <GridItem ml={14}>
              <Contact ml={14} />
            </GridItem>
            <GridItem
              colSpan={3}
              textAlign="center"
              fontSize="x-small "
              fontWeight="light"
              pt={5}
              color="gray.400"
            >
              <Text>@ 2022 Dev by - Kawins. Web icon by - icon8.com</Text>
            </GridItem>
          </Grid>
        </Box>
      )}

      {/* Drawer */}
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Center>
              <Grid templateColumns="repeat(3,1fr)">
                <GridItem>
                  <Image
                    src={footerImg}
                    srcSet={footerImg}
                    fallbackSrc={footerImgPath}
                    h="20vh"
                  />
                </GridItem>
                <GridItem colSpan={2} fontSize="sm">
                  <Contact ml={5} />
                </GridItem>
              </Grid>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
