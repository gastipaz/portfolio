import React from "react";
import { ContentWrapper, ElementWrapper, PageWrapper, PageContainer, Title, Subtitle } from "../pages_elements/PageElements";
import working from './../../images/working.png';
import workingSmall from './../../images/working-small.png'

const Home = () => {

  return (
    <>
      <PageContainer id="home">
        <PageWrapper className="screen-background" style={window.innerWidth > 1024 ? 
        {backgroundImage:`url(${working})`} : {backgroundImage:`url(${workingSmall})`}}>
          <div className="background-clip"/>
          <ContentWrapper className="text-container">
            <ElementWrapper className="home-text-wrapper">
              <Title className="home-title"> Hey there! 👋🏻</Title>
              <Title className="home-title"> I'm Gaston Paz</Title>
              <Subtitle className="home-subtitle"> Welcome to my portfolio</Subtitle>
            </ElementWrapper>
          </ContentWrapper>  
        </PageWrapper> 
      </PageContainer>
    </>
  );
};

export default Home;


