import React from 'react'
import MyHeader from '../../components/pageHeader'
const MyYoutube = ({ children }) => {
  return (
        <div>
            <MyHeader title="YOUNG AND HUNGRY" subTitle=" WELCOME TO MY CHANNEL" subLink="https://www.youtube.com/channel/UCeuYjQ_8Pm1kY4t16pCjbPQ" linkTitle="Subscribe"/>
            { children }
        </div>
  )
}

export default MyYoutube
