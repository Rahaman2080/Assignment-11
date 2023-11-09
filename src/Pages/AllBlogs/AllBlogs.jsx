import useBlogs from "../../hooks/useBlogs";
import AllBlog from "./AllBlog";


const AllBlogs = () => {
    const { data, isLoading, isFetching, refetch } = useBlogs();

    if (isLoading == true) {
        return <div className=" flex justify-center items-center my-12">
            <span className="loading loading-bars loading-lg"></span>
        </div>
       
    }
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold,">Total Blogs {data.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {
                data.map(data => <AllBlog key={data._id} data={data}></AllBlog>)
            }
            </div>
        </div>
    );
};

export default AllBlogs;