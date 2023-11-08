import Swal from "sweetalert2";

const AddBlog = () => {

    const handleAddBlog = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const category = form.category.value;
        const shortDes = form.shortDes.value;
        const longDes = form.longDes.value;
        const time = form.time.value;
        const image = form.image.value;
        const addedBlogs = { title, category, shortDes, longDes, time, image }
        console.log(addedBlogs);

        // send data to the server
        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addedBlogs)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        text: 'New Blog added successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
                // form.reset();
            })
    }
    return (
        <div>
            <div>
                <div className="max-w-4xl mx-auto rounded-xl shadow-2xl bg-[#F4F3F0] my-6">
                    <h1 className="text-2xl md:text-4xl font-semibold text-center text-blue-950 pt-8">Add Blogs</h1>
                    <form onSubmit={handleAddBlog} className="card-body">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name="title" placeholder="Add title" className="input input-bordered lg:w-96" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <div className="input-group">
                                    <select type="select" name="category" className="select select-bordered w-96">
                                        <option disabled selected>Category</option>
                                        <option value="Technology">Technology</option>
                                        <option value="Science">Science</option>
                                        <option value="Architect">Architect</option>
                                        <option value="Agricultural">Agricultural</option>
                                        <option value="Travel">Travel</option>
                                        <option value="Sports">Sports</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <input type="text" name="shortDes" placeholder="Enter Short description" className="input input-bordered lg:w-96" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Long Description</span>
                                </label>
                                <input type="text" name="longDes" placeholder="Enter Long description" className="input input-bordered lg:w-96" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Time</span>
                                </label>
                                <input type="time" name="time" placeholder="" className="input input-bordered lg:w-96" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" name="image" placeholder="Image URL" className="input input-bordered lg:w-96" required />
                            </div>
                        </div>
                        <input type="submit" className="btn btn-primary btn-outline normal-case" value="Add blogs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;