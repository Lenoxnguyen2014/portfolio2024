import MyHeader from "@/components/pageHeader"

const Contact = ({ children }) => {
    return (
        <div>
            <MyHeader title="Let's" subTitle="talk!"/>
            <div className="flex items-center justify-center ">
                { children }
            </div>
        </div>
    )
}

export default Contact