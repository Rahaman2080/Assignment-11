

const Banner = () => {
    return (
        <div>
            <div className="hero md:min-h-screen" style={{ 
                backgroundImage: 'url(https://i.ibb.co/f0DrhTh/blog-banner.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'cover'
         }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl md:text-4xl font-bold">Top 6 categories blogs you find here with free</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;