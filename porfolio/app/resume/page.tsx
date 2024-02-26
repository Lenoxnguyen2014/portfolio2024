import Image from "next/image"

const MyResume = () => {
    return (
    <div className="h-screen bg-gray-100/50" >
        <Image className="object-contain max-h-full min-w-full overflow-x-hidden"
        src="/resume.svg"
        alt="Resume 2024"
        width={100}
        height={50}
        priority
    />
        </div>
    )
}

export default MyResume