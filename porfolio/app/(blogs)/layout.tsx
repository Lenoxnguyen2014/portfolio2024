import React from 'react'
import MyHeader from '@/components/pageHeader'

const Blogs = ({ children }) => {
  return (
      <div className='max-sm:px-4 xl:px-48 max-md:px-8'>
            <MyHeader title="Blogs" subTitle="Get latest insights and tips"/>
            { children }
        </div>
  )
}

export default Blogs
