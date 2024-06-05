import MyHeader from "@/components/pageHeader"

const Blogs = ({ children }) => {
    return (
        <div>
            <MyHeader title="Blogs" subTitle="Technical blogs"/>
            { children }
        </div>
    )
}

export default Blogs