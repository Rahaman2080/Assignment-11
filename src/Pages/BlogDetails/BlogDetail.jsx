
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
                        <div className="col-span-2 border border-black p-5 space-y-4">
                            <p className="text-xl font-bold text-purple-600">Category: {category}</p>
                            <h2 className="card-title">Title: {title}</h2>
                            <p>Time: {time}</p>
                            <p><span className="font-bold">Short Description:</span> {shortDes}</p>
                            <p><span className="font-bold">Long Description:</span> {longDes}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary normal-case btn-outline btn-sm">Update</button>
                            </div>
                        </div>
                        <div className="border border-blue-800 p-5 space-y-4">
                            <p className="text-xl font-bold text-purple-600">Comment</p>
                            <textarea placeholder="Comments here" className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;