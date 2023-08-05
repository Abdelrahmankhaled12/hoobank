import icon from "../images/icon.svg"
import image from "../images/Image.png"
import image3 from "../images/image3.png"
import image2 from "../images/Image2.png"



const SectionPeople = () => {
    return (
        <div className="py-[40px] wow animate__fadeInUp" data-wow-duration="2s">
            <div className="container rounded-[20px] py-[40px] px-[30px]">
                <div className="grid grid-cols-4 items-center">
                    <div className="col-span-4 md:col-span-2">
                        <div className="text">
                            <h1 className="text-[35px] md:text-[45px] font-bold">What people are saying about us</h1>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-2">
                        <p className="text-[#ffffffb3] my-4">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 items-center md:space-x-5">
                    <div className="col-span-3 md:col-span-1 h-[300px] flex justify-center items-center px-10 rounded-[25px] mt-8" style={{ backgroundImage: 'linear-gradient(156deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)', boxShadow: '0px 20px 100px -10px rgba(66, 71, 91, 0.1)' }}>
                        <div className="box">
                            <img src={icon} alt="..."/>
                            <h1 className="my-8">Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</h1>
                            <div className="footer flex">
                                <img src={image} alt="..." />
                                <div className="ms-2">
                                    <h1 className="text-[19px]">Herman Jensen</h1>
                                    <p className="text-[#ffffffb3] text-[13px]">Founder & Leader</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1 h-[300px] flex justify-center items-center px-10 rounded-[25px] mt-8">
                        <div className="box">
                            <img src={icon} alt="..."/>
                            <h1 className="my-8">Money makes your life easier. If you're lucky to have it, you're lucky.</h1>
                            <div className="footer flex">
                                <img src={image2} alt="..." />
                                <div className="ms-2">
                                    <h1 className="text-[19px]">Steve Mark</h1>
                                    <p className="text-[#ffffffb3] text-[13px]">Founder & Leader</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1 h-[300px] flex justify-center items-center px-10 rounded-[25px] mt-8">
                        <div className="box">
                            <img src={icon} alt="..."/>
                            <h1 className="my-8">It is usually people in the money business, finance, and international trade that are really rich.</h1>
                            <div className="footer flex">
                                <img src={image3} alt="..." />
                                <div className="ms-2">
                                    <h1 className="text-[19px]">Kenn Gallagher</h1>
                                    <p className="text-[#ffffffb3] text-[13px]">Founder & Leader</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SectionPeople;
