import React from 'react'
import MyHeader from '@/components/pageHeader'

const Blogs = ({ children }) => {
  return (
        <div>
            <MyHeader title="Blogs" subTitle="Get latest insights and tips"/>
            { children }
        </div>
  )
}

export default Blogs
