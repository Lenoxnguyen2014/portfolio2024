import React from 'react'
import MyHeader from '@/components/pageHeader'

const Projects = ({ children }) => {
  return (
        <div id="projects">
            <MyHeader title="Projects" subTitle="My work experience"/>
            { children }
        </div>
  )
}

export default Projects
