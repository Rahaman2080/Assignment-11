import Swal from "sweetalert2";


const NewsLetter = () => {

    const handleEmail = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        if(email){
            Swal.fire({
                icon: 'success',
                title: "Thank you for subscribing our news letter",
                confirmButtonText: 'Ok'
            });
        }
    }
    return (
        <div>
            <h1 className="text-1xl md:text-3xl font-bold p-8">News Letter--------------------</h1>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/4sFJm9H/newsletter-Img2.jpg)' }}>
                    {/* <div className="hero-overlay bg-opacity-30"></div> */}
                    <div className=" text-center text-white">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl md:text-5xl font-bold">Subscrib Us</h1>
                            <p className="font-bold text-xl">To get All latest blogs please Stay with us by subscribing. Just Put your email and click subscribe button.</p>
                            <form onSubmit={handleEmail} className="flex items-center justify-center">
                                <fieldset className="form-control w-80">
                                    <label className="label">
                                        <span className="text-lg font-semibold">Enter your email address</span>
                                    </label>
                                    <div className="relative mx-auto md:w-full">
                                        <input type="text" name="email" placeholder="username@site.com" className="input input-bordered pr-16" />
                                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;