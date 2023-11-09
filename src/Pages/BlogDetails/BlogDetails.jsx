import { useLoaderData } from "react-router-dom";
import BlogDetail from "./BlogDetail";


const BlogDetails = () => {

    const blogDetails = useLoaderData();
    console.log(blogDetails);
    return (
        <div>
            <h1 className="text-center font-bold text-3xl">Blog details</h1>
            <div>
                <BlogDetail detail={blogDetails}></BlogDetail>
            </div>
        </div>
    );
};

export default BlogDetails;