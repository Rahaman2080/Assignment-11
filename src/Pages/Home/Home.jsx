
import Banner from "../Banner/Banner";
import JoinUs from "../JoinUs/JoinUs";
import LatestNews from "../LatestNews/LatestNews";
import NewsLetter from "../NewsLetter/NewsLetter";
import RecentBlogs from "../RecentBlogs/RecentBlogs";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <div>
            <h1 className="text-1xl md:text-3xl font-bold p-8">Recent Blogs----------------------------</h1>
                <RecentBlogs></RecentBlogs>
            </div>
            <div>
                <NewsLetter></NewsLetter>
            </div>
            <div className="">
                <LatestNews></LatestNews>
            </div>
            <div>
                <JoinUs></JoinUs>
            </div>
        </div>
    );
};

export default Home;