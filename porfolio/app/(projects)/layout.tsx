import React from 'react'
import MyHeader from '@/components/pageHeader'

const Projects = ({ children }) => {
  return (
        <div className='px-48'>
            <MyHeader title="Projects" subTitle="and fun hackathons"/>
            { children }
        </div>
  )
}

export default Projects
