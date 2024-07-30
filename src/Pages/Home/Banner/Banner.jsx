import img1 from '../../../assets/images/banner1.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" alt="Slide 1" />
                <div className="absolute flex items-center h-full w-full rounded-xl top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.6)]">
                    <div className='text-white space-y-7 w-full md:w-1/2 pl-4 sm:pl-12'>
                        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>Affordable Price For Computer Servicing</h2>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-primary mr-4'>Discover more</button>
                            <button className='btn btn-outline btn-warning'>LATEST BUTTON</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" alt="Slide 2" />
                <div className="absolute rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" alt="Slide 3" />
                <div className="absolute rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" alt="Slide 4" />
                <div className="absolute rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

    );
};

export default Banner;