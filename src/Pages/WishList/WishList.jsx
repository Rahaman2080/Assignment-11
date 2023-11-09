import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const WishList = () => {
    const getWishlist = useLoaderData();
    const [lists, setLists] = useState(getWishlist)
    return (
        <div>
            <h1>My Wish List {lists.length}</h1>
        </div>
    );
};

export default WishList;