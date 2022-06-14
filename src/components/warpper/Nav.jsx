import React from "react";
import { Logo } from "../img";
import { logoPath } from "../ImagePath";
import {
  Text,
  Image,
  Box,
  Spacer,
  IconButton,
  Icon,
  useBreakpointValue,
  Link,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { MdKeyboardArrowDown } from "react-icons/md";

const navLink = ["AboutMe", "Develop", "Photograph", "Contact"];

export default function Nav() {
  const breakpoint = useBreakpointValue({ base: true, lg: false });
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleNav = (e) => {
    navigate(`/${e.target.innerText}`);
  };

  return (
    <>
      <Box
        px={5}
        pt={1}
        display="flex"
        alignItems="center"
        sx={{
          position: "sticky",
          top: "0",
        }}
        bgColor="transparent"
      >
        <Text className="text-cover" fontSize="lg">
          KawinS
        </Text>
        {/* <Image src={Logo} srcSet={Logo} fallbackSrc={logoPath} /> */}
        <Spacer />
        {breakpoint ? (
          <IconButton
            icon={<Icon as={MdKeyboardArrowDown} />}
            onClick={onOpen}
            rounded="full"
            variant="ghost"
          />
        ) : (
          <Box display="flex" alignItems="center">
            {navLink.map((info, i) => (
              <Link
                className="shake"
                key={i}
                pr={i != 3 && 6}
                onClick={handleNav}
                fontWeight={window.location.pathname == `/${info}` && "bold"}
              >
                {info}
              </Link>
            ))}
          </Box>
        )}
      </Box>

      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            {navLink.map((info, i) => (
              <Link
                className="shake"
                key={i}
                my={6}
                onClick={handleNav}
                fontWeight={window.location.pathname == `/${info}` && "bold"}
                fontSize="lg"
              >
                {info}
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
