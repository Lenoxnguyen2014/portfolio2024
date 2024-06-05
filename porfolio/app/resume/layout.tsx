import MyHeader from "@/components/pageHeader"

const Resume = ({ children }) => {
    return (
        <div>
            <MyHeader title="Resume" subTitle="My work experience"/>
            { children }
        </div>
    )
}

export default Resume