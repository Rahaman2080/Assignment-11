import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Lists from "./Lists";


const WishList = () => {
    const getWishlist = useLoaderData();
    const [lists, setLists] = useState(getWishlist)
    return (
        <div>
            <h1>My Wish List {lists.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    lists.map(list => <Lists key={list._id} list={list} lists={lists} setLists={setLists}></Lists>)
                }
            </div>
        </div>
    );
};

export default WishList;