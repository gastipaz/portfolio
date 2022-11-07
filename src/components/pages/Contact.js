import {React, useRef} from 'react'
import { Button, ScrollButton } from '../pages_elements/ButtonElement';
import { PageContainer, PageWrapper, PageRow, PageColumn1, PageColumn2, ContentWrapper, ElementWrapper, TopLine, Title, Paragraph } from '../pages_elements/PageElements';
import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa"
import {SiGmail} from "react-icons/si"
import emailjs from '@emailjs/browser';

function Contact({id,heading,subtitle,primary,dark,onHover,buttonLabel, alt, alt2, alt3, alt4, topLine}) {
    const contactForm = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('portfoliogpaz', 'template_iboo6ip', contactForm.current, 'ECEO4iAX0bWuSl6qM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
        <PageContainer id={id}>
          <PageWrapper>
            <PageRow>
              <PageColumn1>
                <ContentWrapper>
                <ElementWrapper>
                  <Title>{heading}</Title>
                  <Paragraph>{subtitle}</Paragraph>
                </ElementWrapper>
                <ElementWrapper className='icons'>
                  <a href="https://www.instagram.com/gastipaz/" target="_blank" rel="noreferrer">
                  <FaInstagram className="contactIcon" alt={alt}/>
                  </a>
                  <a href="https://www.linkedin.com/in/gastonpaz/" target="_blank" rel="noreferrer">
                  <FaLinkedin className="contactIcon" alt={alt2}/>
                  </a>
                  <a href="https://github.com/gastipaz" target="_blank" rel="noreferrer">
                  <FaGithub className="contactIcon" alt={alt3}/>
                  </a>
                  <a href="mailto:gastipaz@gmail.com" target="_blank" rel="noreferrer">
                  <SiGmail className="contactIcon" alt={alt4}/>
                  </a>
                </ElementWrapper>
                </ContentWrapper>
              </PageColumn1>
              <PageColumn2>
                <ContentWrapper>
                <TopLine>{topLine}</TopLine>
                <form className="contact-form" ref={contactForm} method="get" encType="text/plain" onSubmit={sendEmail}>
                  <input className = "smallInput" type="text" name='user_name' placeholder="Name"/>
                  <input className = "smallInput"type="text" name='user_email' placeholder="Email address"/>
                  <input className = "bigInput" type="text" name='user_message' placeholder="Write your message here..."/>
                <ElementWrapper className="contact-btn-wrapper">
                  <Button 
                  type="submit"
                  value="send"
                  primary={primary} 
                  dark={dark} 
                  onClick={sendEmail}
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}>{buttonLabel}</Button>
                </ElementWrapper>
                </form>
                </ContentWrapper>
              </PageColumn2>
            </PageRow>
            <ScrollButton to="home" style={{position:"relative", bottom:"0px"}} primary={true} dark={true} spy={true} smooth={true} offset={0} duration={100}>
              Return Home
            </ScrollButton>
          </PageWrapper>
        </PageContainer>
    );
  }
  
  export default Contact;