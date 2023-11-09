import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Blog = ({blog}) => {
    const { category, image, shortDes, time, title, _id} = blog || {};

    
    const handleWishList = () =>{
        const wishList = { category, image, shortDes, time, title, _id }
        console.log(wishList);

        // send data to the server
        fetch('https://assignment-0006-server.vercel.app/addwishlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(wishList)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        text: 'Blogs added to wishlist successful!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
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
                        <button onClick={handleWishList} className="btn btn-ghost">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;