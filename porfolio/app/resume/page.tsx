import Image from "next/image"

const MyResume = () => {
    // add style for this page tmr
    // and checkout download button
    return (
    <div >
        <Image
        src="/resume.svg"
        alt="Resume 2024"
        width={80}
        height={50}
        priority
    />
        </div>
    )
}

export default MyResume