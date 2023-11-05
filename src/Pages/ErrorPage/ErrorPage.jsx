import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="grid justify-center items-center max-w-5xl mx-auto md:mt-28 text-center">
            <img src="https://i.ibb.co/3RbX8YT/404.gif" alt="No image" className="w-60 md:w-1/2 mx-auto" />
            <h1 className="text-3xl font-bole text-green-700">Data Not Found</h1>
            <Link to={'/'}>
                <button className="mt-4 btn btn-success normal-case btn-outline text-xl font-bold">go home</button></Link>
        </div>
    );
};

export default ErrorPage;