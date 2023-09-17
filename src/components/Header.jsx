import { Flex, HStack, chakra } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import React, { useEffect } from 'react';
import MobileHeader from "./MobileHeader";
import { links } from "../utils/constants";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  // Example useEffect
  useEffect(() => {
    // This code will run when the component mounts or when pathname changes.
    console.log(`The current pathname is: ${pathname}`);

    // You can perform other side effects here if needed.
  }, [pathname]); // Add dependencies as needed

  return (
    <chakra.header
      id="header"
      backgroundColor="blueTheme.navBg"
      pos="sticky"
      top={0}
      zIndex="100"
      boxShadow="0 10px 30px -10px blueTheme.navShadow"
    >
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        <Link
          href="/"
          fontFamily="Righteous"
          fontSize="lg"
          _hover={{ textDecoration: "none" }}
        >
          MAIRA PERVEEN  {"</>"} {" "}
        </Link>

        <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }}>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              fontWeight="extrabold"
              _hover={{ textDecoration: "none", color: "blueTheme.navLinkActive" }}
              fontSize="lg"
              className={pathname === link.path ? "active-link" : ""}
            >
              {link.text}
            </Link>
          ))}
        </HStack>

        <HStack>
          <MobileHeader {...{ pathname }} />
        </HStack>
      </Flex>
    </chakra.header>
  );
}
