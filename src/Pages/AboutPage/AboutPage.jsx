

import img1 from '../../assets/images/banner2.jpg'
const AboutPage = () => {
    return (

        <div>
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full rounded-xl  top-0 left-0   bg-gradient-to-r from-[#151515] to-[rgba(21,21,0)">
                    <div className='text-white ml-12 '>
                        <h2 className='text-6xl'>About us</h2>

                    </div>

                </div>
            </div>

            <div className='mt-8'>
                <h1 className='text-3xl text-center'>1.WE HAVE VAST EXPERIENCE</h1>
                <p className='text-center text-xl p-12 '>Computer Repair was formed in 1998 on founder John Johnson’s vision of building a national service and repair agency focused on unparalleled service, customized solutions, and outstanding results.</p>

                <div className='flex p-8 gap-4'>
                    <div className='text-justify'>
                        <p>ras a sapien in neque sodales tempor. Donec fermentum eu odio in congue. Curabitur eu suscipit est. Sed egestas, nisi quis egestas pulvinar, tellus est aliquet velit, vel lacinia orci nulla nec turpis. Nullam at libero orci. Etiam placerat orci vitae vulputate pulvinar. Cras maximus gravida rhoncus. Sed et sem vel diam volutpat pretium. Nunc rutrum orci a metus sollicitudin posuere. Nullam dignissim tincidunt leo et semper. Cras molestie dui vel ullamcorper bibendum. Aliquam varius dapibus arcu ut feugiat.</p>
                    </div>

                    <div className='text-justify'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum tempor nisl, sollicitudin condimentum metus pharetra fermentum. Etiam sit amet ex vitae eros venenatis laoreet in vitae dui. Fusce dignissim rutrum nisl. Vivamus arcu nunc, efficitur mattis efficitur quis, tincidunt id neque. Maecenas semper neque lectus, id accumsan mi posuere eget. Duis pellentesque tempor quam, vel imperdiet odio pharetra eget. Fusce vehicula nibh quam, nec aliquet metus mattis sed. Etiam nec volutpat magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>

                    </div>
                </div>
            </div>



            <div className=' bg-gray-100'>

                <div className='pt-24'>

                    <h1 className='text-3xl text-center '>2.CERTIFIED SPECIALISTS</h1>
                    <p className='text-center text-xl mt-8 px-8'>Without a thorough knowledge of network technologies and confirming this knowledge, a specialist can harm the customer. The competence of our specialists is confirmed by the certificates of the world guid.</p>


                </div>

                <div className='flex gap-4 mt-8 p-12 text-justify'>
                    <div>
                        <p>ras a sapien in neque sodales tempor. Donec fermentum eu odio in congue. Curabitur eu suscipit est. Sed egestas, nisi quis egestas pulvinar, tellus est aliquet velit, vel lacinia orci nulla nec turpis. Nullam at libero orci. Etiam placerat orci vitae vulputate pulvinar. Cras maximus gravida rhoncus. Sed et sem vel diam volutpat pretium. Nunc rutrum orci a metus sollicitudin posuere. Nullam dignissim tincidunt leo et semper. Cras molestie dui vel ullamcorper bibendum. Aliquam varius dapibus arcu ut feugiat.</p>
                    </div>

                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum tempor nisl, sollicitudin condimentum metus pharetra fermentum. Etiam sit amet ex vitae eros venenatis laoreet in vitae dui. Fusce dignissim rutrum nisl. Vivamus arcu nunc, efficitur mattis efficitur quis, tincidunt id neque. Maecenas semper neque lectus, id accumsan mi posuere eget. Duis pellentesque tempor quam, vel imperdiet odio pharetra eget. Fusce vehicula nibh quam, nec aliquet metus mattis sed. Etiam nec volutpat magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>

                    </div>
                </div>

            </div>




            <div className=' bg-gray-100'>

                <div className='pt-24'>

                    <h1 className='text-3xl text-center '>3.WE REPAIR ALL POPULAR BRANDS</h1>
                    <p className='text-center text-xl mt-8 px-8'>We are proud that we can fix almost any model of a computer or laptop. We always have a lot of spare parts, monitors, motherboards and a lot of other.</p>


                </div>

                <div className='flex gap-4 mt-8 p-12 text-justify'>
                    <div>
                        <p>ras a sapien in neque sodales tempor. Donec fermentum eu odio in congue. Curabitur eu suscipit est. Sed egestas, nisi quis egestas pulvinar, tellus est aliquet velit, vel lacinia orci nulla nec turpis. Nullam at libero orci. Etiam placerat orci vitae vulputate pulvinar. Cras maximus gravida rhoncus. Sed et sem vel diam volutpat pretium. Nunc rutrum orci a metus sollicitudin posuere. Nullam dignissim tincidunt leo et semper. Cras molestie dui vel ullamcorper bibendum. Aliquam varius dapibus arcu ut feugiat.</p>
                    </div>

                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum tempor nisl, sollicitudin condimentum metus pharetra fermentum. Etiam sit amet ex vitae eros venenatis laoreet in vitae dui. Fusce dignissim rutrum nisl. Vivamus arcu nunc, efficitur mattis efficitur quis, tincidunt id neque. Maecenas semper neque lectus, id accumsan mi posuere eget. Duis pellentesque tempor quam, vel imperdiet odio pharetra eget. Fusce vehicula nibh quam, nec aliquet metus mattis sed. Etiam nec volutpat magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>

                    </div>
                </div>

            </div>
        </div>


    );
};

export default AboutPage;