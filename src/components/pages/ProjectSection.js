import React from 'react'
import { Button } from '../pages_elements/ButtonElement';
import { PageRow, PageColumn1, PageColumn2, ContentWrapper, ElementWrapper, Title, Paragraph, TopLine } from "../pages_elements/PageElements";

const ProjectSection = ({ project }) => {
    return (
        <PageRow style={{background: "#d0b49f18", paddingTop: "20px"}}>
            <PageColumn1>
                <ContentWrapper>
                    <ElementWrapper>
                        <TopLine>Project #{project.id}</TopLine>
                        <Title>{project.title}</Title>
                        <Paragraph>{project.description}</Paragraph>
                        <ElementWrapper className="projects-btn-wrapper">
                            <a href={project.links.github} target="_blank" rel="noreferrer">
                                <Button primary={true} dark={true}>Demo</Button>
                            </a>
                            <a href={project.links.github} target="_blank" rel="noreferrer">
                                <Button primary={true} dark={true}>GitHub</Button>
                            </a>
                        </ElementWrapper>
                    </ElementWrapper>
                </ContentWrapper>
            </PageColumn1>
            <PageColumn2>
                <ContentWrapper className='project-images'>
                    <div className="mockups-container">
                        <div className="laptop-mockup">
                            <img className="laptop-image" src={project.images[1]} alt="phone-mockup" />
                        </div>
                        <div className="phone-mockup">
                            <img className="phone-image" src={project.images[0]} alt="laptop-mockup" />
                        </div>
                    </div>
                </ContentWrapper>
            </PageColumn2>
        </PageRow>
    )
}

export default ProjectSection