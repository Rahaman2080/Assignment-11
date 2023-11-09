import useBlogs from "../../hooks/useBlogs";
import Blog from "./Blog";


const RecentBlogs = () => {
    const { data, isLoading, isFetching, refetch } = useBlogs();
    console.log(data);

    if (isLoading == true) {
        return <div className=" flex justify-center items-center my-12">
            <span className="loading loading-bars loading-lg"></span>
        </div>
       
    }

    return (
        <div>
            <h1 className="text-3xl font-bold p-8">Recent Blogs----------------------------</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-6 max-w-5xl mx-auto">
             {
                data.length > 0 ? data.slice(0, 6).map(blog => <Blog key={blog._id} blog={blog}></Blog>) : ''
            } 
            </div>
        </div>
    );
};

export default RecentBlogs;