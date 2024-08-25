import React from 'react'
import MyHeader from '@/components/pageHeader'

const Projects = ({ children }) => {
  return (
        <div className='max-sm:px-4 xl:px-48 max-md:px-8'>
            <MyHeader title="Projects" subTitle="and fun hackathons"/>
            { children }
        </div>
  )
}

export default Projects
