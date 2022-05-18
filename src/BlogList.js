import { Link } from "react-router-dom";
const BlogList = ({ blogs, title }) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((b) => (
                <div className="blogPreview" key={b.id}>
                    <Link to={`/blogs/${b.id}`}>
                    <h2>{b.title}</h2>
                    <p>Written by {b.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;