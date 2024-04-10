'use client'
import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './styles.module.css'
import GenerateQuote from './quote'
interface Weather {
    weatherMain: string,
    weatherDescription?: string,
    weatherIcon: string,
    weatherIconLink: string
}

const Weather = ({ weatherMain, weatherDescription, weatherIconLink }: Weather) => {
    const weatherState  = 'Today: '
    const alignCenter = { display: 'flex', alignItems: 'center' }

    return (
        <div>
            <Parallax pages={5}>
                <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg h-64 bg-gray-100/50">
                        <div className="flex justify-center items-center">
                            <img  src={weatherIconLink} alt="weaatherIcon" width={100} height={20} />
                        </div>
                        <div className=" box-border p-4 border-10 ">
                        <h4>{weatherState} {weatherMain} </h4>
                        <div>
                            {weatherDescription} in Vancouver
                            <p className="flex justify-center items-center mt-8"> Scroll down </p>
                        </div>
                    </div>
                    </div>
                </ParallaxLayer>
            
                <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                    <div className={`${styles.card} ${styles.sticky}`}>
                        <GenerateQuote stringQuote="Life is too short" subString='Live your life' /> 
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
                    <GenerateQuote stringQuote="Just be better than" subString='1% from yesterday' /> 
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
                        <GenerateQuote stringQuote="Past is not here" subString='Future has not come' /> 
                    </div>
                </ParallaxLayer>
                </Parallax>
        </div>
    )
}

export default Weather
