import { useQuery } from "@tanstack/react-query";


const useBlogs = () => {

    const { data, isLoading, isFetching, refetch } = useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            const data = await fetch('https://assignment-0006-server.vercel.app/blogs');
            return await data.json();
        }
    });
    return { data, isLoading, isFetching, refetch };
};

export default useBlogs;