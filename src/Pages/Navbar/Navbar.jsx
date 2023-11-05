// import { useContext } from "react";
// import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Context/AuthProvider";
// import Swal from "sweetalert2";
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    // const { user, logOut } = useContext(AuthContext);
    // const location = useLocation();
    // const navigate = useNavigate();

    // const handleSignOut = () =>{
    //     logOut()
    //     .then(()=>{
    //         Swal.fire('User logged out successful');

    //         // navigate after loading
    //         navigate(location?.state ? location.state : '/');
    //     })
    //     .catch()
    // }

    const navLinks = <>
        <li><NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-500 text-xl font-bold underline" : "text-xl font-bold"
            }>Home</NavLink></li>
        <li><NavLink to="/addBlog" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-500 text-xl font-bold underline" : "text-xl font-bold text-white"
            }>Add blog</NavLink></li>
        <li><NavLink to="/allBlogs"className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-500 text-xl font-bold underline" : "text-xl font-bold text-white"
            }>All blogs</NavLink></li>
        <li><NavLink to="/featuredBlogs" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-500 text-xl font-bold underline" : "text-xl font-bold text-white"
            }>Featured blogs</NavLink></li>
        <li><NavLink to="/wishlist" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-500 text-xl font-bold underline" : "text-xl font-bold text-white"
            }>Wishlist</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-slate-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-slate-800 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/">
                    <a href="https://imgbb.com/"><img src="https://i.ibb.co/HdwD0sG/architect-logo-60.png" alt="architect-logo-60" border="0"/></a> 
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="gap-8 menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* {
                        user && <p className="font-bold mr-3">{user.displayName}</p>
                    } */}
                    {/* {
                        user && <label tabIndex={0} className="avater">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user.photoURL} className="rounded-full" />
                            </div>
                        </label>
                    } */}
                    {/* {
                        user ? <button className="btn btn-ghost normal-case text-xl md:text-2xl font-bold"><FiLogOut></FiLogOut></button>
                        :
                        <Link to="/login">
                        <button className="btn btn-ghost normal-case text-xl md:text-2xl font-bold"><FiLogIn></FiLogIn></button>
                        </Link>
                    } */}
                    <Link to="/login">
                        <button className="btn btn-ghost normal-case text-xl md:text-2xl font-bold text-white">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;