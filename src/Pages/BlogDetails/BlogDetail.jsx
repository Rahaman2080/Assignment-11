
const BlogDetail = ({ detail }) => {
    const { category, image, shortDes, longDes, time, title, _id } = detail || {};
    return (
        <div>
            <div className="card bg-base-100 shadow-xl flex flex-col gap-5 m-6 md:m-0">
                <figure className="">
                    <img src={image} alt="image" />
                </figure>
                <div className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="col-span-2 border border-black">
                            <p className="text-xl font-bold text-rose-500">Category: {category}</p>
                            <h2 className="card-title">Title: {title}</h2>
                            <p>{time}</p>
                            <p>Short Description: {shortDes}</p>
                            <p>Long Description: {longDes}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary normal-case btn-outline btn-sm">Update</button>
                            </div>
                        </div>
                        <div className="border border-blue-800">
                            <p>Comment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;