import React from "react";
import { PageContainer, PageWrapper, PageRow, PageColumn1, PageColumn2, ContentWrapper, ElementWrapper, TopLine, Title, Paragraph } from "../pages_elements/PageElements";
import Skills from "./Skills";
import {objectTwo} from './data/Data'
import {FaPython, FaHtml5, FaReact, FaCss3Alt} from 'react-icons/fa'
import  {SiJavascript} from 'react-icons/si'

const AboutMe = ({ id, topLine, heading, subtitle }) => {
  return (
      <PageContainer id={id}>
        <PageWrapper>
          <PageRow>
            <PageColumn1>
              <ContentWrapper>
                <ElementWrapper>
                  <TopLine >{topLine}</TopLine>
                  <Title>{heading}</Title>
                  <Paragraph>{subtitle}</Paragraph>
                </ElementWrapper>
              </ContentWrapper>
            </PageColumn1>
            <PageColumn2>
              <ContentWrapper>
                <Skills {...objectTwo}/>
              </ContentWrapper>
            </PageColumn2>
          </PageRow>
          <ElementWrapper className="skills-container">
            <FaPython className="skills-icon"/>
            <FaReact className="skills-icon"/>
            <SiJavascript className="skills-icon"/>
            <FaHtml5 className="skills-icon"/>
            <FaCss3Alt className="skills-icon"/>
          </ElementWrapper>
        </PageWrapper>
      </PageContainer>
  );
};

export default AboutMe;
