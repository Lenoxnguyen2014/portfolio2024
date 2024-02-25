type BlogPageProps = {
    params: {
        slug: string
    }
}


const Blog = (props: BlogPageProps) => {
    const slug  = props.params.slug
    return (
        <div>
            <h1>You are in {slug} </h1>
        </div>
    )
}

export default Blog