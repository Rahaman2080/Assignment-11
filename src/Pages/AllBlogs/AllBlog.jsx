import { Link } from "react-router-dom";


const AllBlog = ({data}) => {
    const { category, image, shortDes, time, title, _id} = data || {};
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={image} alt="image" className="h-72 w-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p className="font-bold text-xl">{title}</p>
                    <p>Time: {time}</p>
                    <p className="h-32">{shortDes}</p>
                    <div className="card-actions justify-around items-center">
                        <Link to={`/blogDetails/${_id}`}>
                        <button className="btn btn-ghost">Details</button>
                        </Link>
                        <button className="btn btn-ghost">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlog;