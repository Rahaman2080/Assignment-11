import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Lists = ({list, lists, setLists}) => {
    const { category, image, shortDes, time, title, _id } = list || {};

    const handleDelete = id => {
       
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result)=>{
            if(result.isConfirmed){
                fetch(`http://localhost:5000/wishlist/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your Cart has been deleted',
                            'success'
                        )
                        const remaining = lists.filter(have => have._id !== _id);
                        setLists(remaining);
                    } 
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
                        <button onClick={handleDelete} className="btn btn-ghost">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lists;