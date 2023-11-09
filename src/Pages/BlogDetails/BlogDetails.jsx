import useBlogs from "../../hooks/useBlogs";


const BlogDetails = () => {
    const { data, isLoading, isFetching, refetch } = useBlogs();

    if (isLoading == true) {
        return <div className=" flex justify-center items-center my-12">
            <span className="loading loading-bars loading-lg"></span>
        </div>
       
    }
    return (
        <div>
            
        </div>
    );
};

export default BlogDetails;