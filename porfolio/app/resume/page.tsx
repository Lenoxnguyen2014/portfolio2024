'use client'
import React, { useState, CSSProperties, useEffect } from 'react'
import { useTransition, animated, AnimatedProps, useSpringRef } from '@react-spring/web'

import styles from './styles.module.css'

const pages: ((props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement)[] = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>
     <div className="grid grid-cols-2 m-20 ml-10 max-sm:block m-0">
        <div className="w-50">
        <img src="https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg"></img>
        </div>
        <div className="ml-20 p-10 place-self-center max-sm:ml-0 " style={{border: "solid 1px"}}> 
            <h1>If I am not a software developer</h1>
            <br/>
            <p>
            I will be a zen girl
            </p>
            <p>
            I would love have a garden and take care the plants
            </p>
            <p>
            I will play guitar
            </p>
            <p>
            Become a youtuber and film more tutorials or share my experience
            </p>
        </div>
     </div>
  </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>
   <div className="grid grid-cols-2 m-20 ml-10 max-sm:block m-0">
        <div className="w-50">
        <img src="https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg"></img>
        </div>
        <div className="ml-20 p-10 place-self-center max-sm:ml-0 " style={{border: "solid 1px"}}> 
            <h1>If I am not a software developer</h1>
            <br/>
            <p>
            I will be a zen girl
            </p>
            <p>
            I would love have a garden and take care the plants
            </p>
            <p>
            I will play guitar
            </p>
            <p>
            Become a youtuber and film more tutorials or share my experience
            </p>
        </div>
     </div>

  </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightgreen'}}>
   <div className="grid grid-cols-2 m-20 ml-10 max-sm:block m-0">
        <div className="w-50">
        <img src="https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg"></img>
        </div>
        <div className="ml-20 p-10 place-self-center max-sm:ml-0 " style={{border: "solid 1px"}}> 
            <h1>If I am not a software developer</h1>
            <br/>
            <p>
            I will be a zen girl
            </p>
            <p>
            I would love have a garden and take care the plants
            </p>
            <p>
            I will play guitar
            </p>
            <p>
            Become a youtuber and film more tutorials or share my experience
            </p>
        </div>
     </div>
  </animated.div>,
]

const MyResume = ({data = [1, 2, 3 ]}) => {
    const [index, set] = useState(0)
    const onClick = () => set(state => (state + 1) % 3)
    const transRef = useSpringRef()
    const transitions = useTransition(index, {
      ref: transRef,
      keys: null,
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })
    useEffect(() => {
      transRef.start()
    }, [index])
    return (
      <div className={`flex fill ${styles.container}`} onClick={onClick}>
        {transitions((style, i) => {
          const Page = pages[i]
          return <Page style={style} />
        })}
      </div>
    )
}

export default MyResume