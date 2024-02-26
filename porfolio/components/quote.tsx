"use client"

import { TypeAnimation } from "react-type-animation"

const GenerateQuote = () => {
    return (
            <TypeAnimation
                sequence={[
                    "Do things at your own pace",
                    1000,
                    "Life is not a race",
                    1000
                ]}
                speed={50}
                repeat={Infinity}
                style={{fontSize: '2em'}}
            />
    )
}

export default GenerateQuote