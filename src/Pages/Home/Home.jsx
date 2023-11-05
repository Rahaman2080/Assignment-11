
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import ExtraSection from "../ExtraSection";
import ExtraSection2 from "../ExtraSection2";
import Navbar from "../Navbar/Navbar";
import Navbar2 from "../Navbar/Navbar2";


const Home = () => {


    return (
        <div>
            <Navbar></Navbar>
            <div className="relative ">
            <Banner></Banner>
            </div>
             <div className="absolute top-20 right-0">
            <Navbar2></Navbar2>
            </div> 
            <div className="bg-base-300">
                <Brands></Brands>
            </div>
            <div>
                <ExtraSection></ExtraSection>
            </div>
            <div className="my-10">
                <ExtraSection2></ExtraSection2>
            </div>
        </div>
    );
};

export default Home;