import React from "react";
import {ElementWrapper, Title, Paragraph, TopLine} from "../pages_elements/PageElements";


const Skills = ({topLine, heading, subtitle}) => {
  return (
    <>
      <ElementWrapper>
        <TopLine>{topLine}</TopLine>
        <Title>{heading}</Title>
        <Paragraph>{subtitle}</Paragraph>     
      </ElementWrapper>
    </>
  );
};

export default Skills;