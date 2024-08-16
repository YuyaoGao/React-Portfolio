import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Logan Gao!";
const bio1 = "A recent Computer Science major graduate ";
const bio2 = "looking for a entry-level job";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#D4D7D1"
  >
    <VStack>
      <Avatar
        src='https://media.licdn.com/dms/image/D5635AQHUx6weBtf5kg/profile-framedphoto-shrink_200_200/0/1707614352339?e=1724292000&v=beta&t=RMabs4XHuDNv-l0edgoyGDSyq1X3_Avt_2siSW7xRBk'
        name='Yuyao Gao'
        size="xxl"
      />
      <Heading size='md' color='#367098'>{greeting} </Heading>
      <Heading color='#367098'>{bio1}</Heading>
      <Heading color='#367098'>{bio2}</Heading>

    </VStack>

  </FullScreenSection>
);

export default LandingSection;
