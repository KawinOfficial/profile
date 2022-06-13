import React from "react";
import { Logo } from "../img";
import { logoPath } from "../ImagePath";
import {
  Text,
  Image,
  Box,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Icon,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { MdKeyboardArrowDown } from "react-icons/md";

const navLink = ["AboutMe", "Develop", "Photograph", "Contact"];

export default function Nav() {
  const breakpoint = useBreakpointValue({ base: true, lg: false });
  const navigate = useNavigate();

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
      >
        <Image src={Logo} srcSet={Logo} fallbackSrc={logoPath} />
        <Spacer />
        {breakpoint ? (
          <Menu size="sm">
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<Icon as={MdKeyboardArrowDown} />}
              rounded="full"
            />

            <MenuList>
              {navLink.map((info) => (
                <MenuItem key={info}>{info}</MenuItem>
              ))}
            </MenuList>
          </Menu>
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
    </>
  );
}
