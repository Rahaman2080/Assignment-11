
import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter/NewsLetter";
import RecentBlogs from "../RecentBlogs/RecentBlogs";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <div>
                <RecentBlogs></RecentBlogs>
            </div>
            <div>
                <NewsLetter></NewsLetter>
            </div>
        </div>
    );
};

export default Home;