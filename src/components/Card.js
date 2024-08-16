import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  return(
    <VStack>
      <VStack background='#D4D7D1' borderRadius='xl' alignItems='left'>
        <Image src={imageSrc} borderRadius='xl' />
        <VStack spacing={2} p={4} alignItems="flex-start">
          <Text color='#2C5B82' fontSize='xl' as='b' >{title}</Text>
          <Text color='gray.500'>{description}</Text>
          <HStack cursor='pointer'>
            <a href={link}>
              <Text color='#2C5B82'>Read more</Text> 
            </a>
            <FontAwesomeIcon icon={faArrowRight} size="1x" color='#2C5B82' />
          </HStack>
        </VStack>
        
        
      </VStack>
    </VStack>
  )
};

export default Card;
