

const SectionHome = () => {
    return (
        <>
            <div className="py-[40px] grid grid-cols-2 items-center">
                <div className="col-span-2 md:col-span-1 mb-14">
                    <div className="w-[90%] md:w-[80%] flex justify-center ms-auto">
                        <div className="relative">
                            <div className="text">
                                <div className="flex items-center w-fit px-4  py-0.5 rounded-[20px]" style={{ background: 'linear-gradient(125.17deg, #272727 0%, #11101D 100%)' }}>
                                    <img src={require("../images/Discount.png")} alt=".." />
                                    <p className="text-[rgba(255,255,255,0.6)]"><span className="text-white">20%</span> DISCOUNT FOR <span className="text-white">1 MONTH</span> ACCOUNT</p>
                                </div>
                                <h1 className="text-[30px] md:text-[55px] font-bold">The Next</h1>
                                <h1 className="text-[30px] md:text-[55px] font-bold" style={{ background: 'linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)', WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>Generation</h1>
                                <h1 className="text-[30px] md:text-[55px] font-bold">Payment Method.</h1>
                                <p className="text-[#ffffffb3] my-4">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
                            </div>
                            <div className="absolute top-[45px] right-[100px]">
                                <img src={require("../images/started.png")} alt=".." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <img src={require("../images/home.png")} alt="..." className="w-[700px] ms-auto" />
                </div>
            </div>
        </>
    );
};

export default SectionHome;

