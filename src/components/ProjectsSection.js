import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Oasis Pro",
    description:
      'A software simulation for the medical instrument "Oasis Pro,"using c++ as development language and Qt as framework',
    getImageSrc: () => require("../images/OASIS_Pro.jpg"),
    link: "https://github.com/YuyaoGao/COMP3004-TeamProject"
  },
  {
    title: "Car Image Classifier",
    description:
      'A car image classifier which implemented with python, CNN model, tensorflow library, and trained with "Stanford Cars Dataset"',
    getImageSrc: () => require("../images/dataset-cover.jpg"),
    link: "https://drive.google.com/file/d/1jxFJly81dtVvDlLPI1Uc4zhWD1UzQfni/view"
  },
  {
    title: "Simple React Calculator",
    description:
      "A simple react calculator application which can perform 'add', 'minus', 'multiply', 'divid','resetInput', and 'resetResult'",
    getImageSrc: () => require("../images/SimpleCalculator.JPG"),
    link: "https://github.com/YuyaoGao/Simple-Calculator"
  },
  {
    title: "React Portfolio",
    description:
      "A react portfolio page for myself, including a header section, a landing section, a project experience section and a contact me section",
    getImageSrc: () => require("../images/Portfolio.jpg"),
    link: "https://github.com/YuyaoGao/React-Portfolio"
  },
  
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#79BBCF"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
