const SectionHome = () => {
    return (
        <>
            <div className="py-[40px] grid grid-cols-2">
                <div className="col-span-2 md:col-span-1">
                    <div className="w-[80%] flex justify-center ms-auto">
                        <div className="relative">
                            <div className="text">
                                <h1 className="text-[30px] md:text-[55px] font-bold">The Next</h1>
                                <h1 className="text-[30px] md:text-[55px] font-bold" style={{ background: 'linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)', WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>Generation</h1>
                                <h1 className="text-[30px] md:text-[55px] font-bold">Payment Method.</h1>
                                <p className="text-[#ffffffb3] my-4">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
                            </div>
                            <div className="absolute top-[45px] right-[100px]">
                                <div className="circle relative border-[1px] border-solid w-[120px] h-[120px] rounded-[50%]" style={{ borderImage: 'linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)', borderImageSlice : "1"}}>
                                    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-semibold text-[20px]" style={{ background: 'linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)', WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>Get Started</p>
                                </div>
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

