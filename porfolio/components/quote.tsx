'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

interface StringQuote {
    stringQuote: string
    subString: string
}
const GenerateQuote = (props: StringQuote) => {
  return (
            <TypeAnimation key="1"
                sequence={[
                  props.stringQuote,
                  1000,
                  props.subString,
                  1000
                ]}
                speed={50}
                repeat={Infinity}
                style={{ fontSize: '2em' }}
            />
  )
}

export default GenerateQuote
