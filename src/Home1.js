import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home1 = () => {
    
    // const [name,setName]=useState('jay');
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((b) => (b.id !== id));
    //     setBlogs(newBlogs);
    // }
    const {data,isPending,error} = useFetch("http://localhost:8000/blogs");
    return (
        <div className="Home1">


            {error && <div>{ error }</div>}
            {isPending && <div>Loading ... </div>}
            {data && <BlogList blogs={data} title="All Blogs!!"  />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'jay')} title='jays blogs' /> */}
            {/* <button onClick={()=> setName('cool')}>change me</button>
            <p>{name}</p> */}
        </div>

    );
}

export default Home1;