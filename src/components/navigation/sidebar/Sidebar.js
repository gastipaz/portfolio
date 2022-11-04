import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './Sidebar_elements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <div>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon/>
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to="home" onClick={toggle}>
                    Home
                  </SidebarLink>
                  <SidebarLink to="about" onClick={toggle}>
                    About me
                  </SidebarLink>
                  <SidebarLink to="projects" onClick={toggle}>
                    Projects
                  </SidebarLink>
                  <SidebarLink to="contact" onClick={toggle}>
                    Contact
                  </SidebarLink>
              </SidebarMenu>
          </SidebarWrapper>
      </SidebarContainer>
    </div>
  )
}

export default Sidebar