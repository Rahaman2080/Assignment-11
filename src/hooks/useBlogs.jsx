import { useQuery } from "@tanstack/react-query";


const useBlogs = () => {

    const { data, isLoading, isFetching, refetch } = useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            const data = await fetch('http://localhost:5000/blogs');
            return await data.json();
        }
    });
    return { data, isLoading, isFetching, refetch };
};

export default useBlogs;