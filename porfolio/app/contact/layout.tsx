import MyHeader from "@/components/pageHeader"

const Contact = ({ children }) => {
    return (
        <div>
            <MyHeader title="Contact" subTitle="Let's get a coffee chat!"/>
            <div className="flex items-center justify-center ">
                { children }
            </div>
        </div>
    )
}

export default Contact