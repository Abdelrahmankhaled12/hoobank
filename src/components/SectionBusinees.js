import star from "../images/Star.svg"
import shield from "../images/Shield Done.svg"
import send from "../images/Send.svg"


const SectionBusinees = () => {
    return (
        <div className="container py-[40px] wow animate__fadeInUp" data-wow-duration="2s">
            <div className="grid grid-cols-2 items-center">
                <div className="col-span-2 md:col-span-1 mt-5">
                    <div className="text">
                        <h1 className="text-[30px] md:text-[45px] font-bold">You do the business, we’ll handle the money.</h1>
                        <p className="text-[#ffffffb3] my-4">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                        <button style={{ backgroundImage: 'linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)' }} className="hover:scale-[1.1] transition duration-700 ease-in-out px-9 py-2.5 rounded-[15px] text-[#00040E] font-semibold">Get Start</button>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1 mt-5">
                    <div className="my-2">
                        <div className="flex md:w-[80%] py-5 px-3 rounded-[20px]">
                            <div>
                                <div className="bg-[rgba(9,151,124,0.1)] w-[50px] h-[50px] rounded-[50%] relative">
                                    <img src={star} alt=".." className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
                                </div>
                            </div>
                            <div className="text ms-2">
                                <h2 className="font-semibold">Rewards</h2>
                                <p className="text-[#ffffffb3] text-[14px]">The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-2">
                        <div style={{ backgroundImage: 'linear-gradient(153.47deg, rgba(255, 255, 255, 0) -341.94%, #14101D 95.11%)', boxShadow: '0px 20px 100px -10px rgba(66, 71, 91, 0.1)' }} className="flex md:w-[80%] py-5 px-3 rounded-[20px]">
                            <div>
                                <div className="bg-[rgba(9,151,124,0.1)] w-[50px] h-[50px] rounded-[50%] relative">
                                    <img src={shield} alt=".." className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
                                </div>
                            </div>
                            <div className="text ms-2">
                                <h2 className="font-semibold">100% Secured</h2>
                                <p className="text-[#ffffffb3] text-[14px]">We take proactive steps make sure your information and transactions are secure.</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-2">
                        <div className="flex md:w-[80%] py-5 px-3 rounded-[20px]">
                            <div>
                                <div className="bg-[rgba(9,151,124,0.1)] w-[50px] h-[50px] rounded-[50%] relative">
                                    <img src={send} alt=".." className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
                                </div>
                            </div>
                            <div className="text ms-2">
                                <h2 className="font-semibold">Balance Transfer</h2>
                                <p className="text-[#ffffffb3] text-[14px]">A balance transfer credit card can save you a lot of money in interest charges.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SectionBusinees;
