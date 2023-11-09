

const Blog = ({blog}) => {
    const { category, image, shortDes, time, title, _id} = blog || {};
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={image} alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p className="font-bold text-xl">{title}</p>
                    <p>{time}</p>
                    <p>{shortDes}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;