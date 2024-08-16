import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faGithub,
    url: "https://github.com/YuyaoGao",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/logan-gao-315075293/",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#2C5B82"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/*social media links based on the `socials` data */}
            {
              <HStack spacing={4}>
                {
                  socials.map((social) => <a href={social.url} key={social.url}>
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </a>)
                }
              </HStack>
            }
          </nav>
          <nav>
            <HStack spacing={8}>
              {/*links to Projects and Contact me section */}
              <a herf="#projects" onClick={handleClick("projects")} >Projects</a>
              <a herf="#contact-me" onClick={handleClick("contactme")}>Contact me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
