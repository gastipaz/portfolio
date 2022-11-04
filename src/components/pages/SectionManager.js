import React from 'react'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
import { objectOne, objectThree } from './data/Data';

const SectionManager = () => {

  return (
    <section>
        <AboutMe {...objectOne}/>
        <Projects/>
        <Contact {...objectThree}/>
    </section>
  )
}

export default SectionManager