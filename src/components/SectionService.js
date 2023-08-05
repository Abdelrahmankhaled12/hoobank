
const SectionService = () => {
    return (
        <div className="py-[40px] wow animate__fadeInUp" data-wow-duration="2s">
            <div className="container rounded-[20px] md:h-[280px] flex py-[60px] md:py-[0px]" style={{ backgroundImage: 'linear-gradient(190deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)', boxShadow: '0px 20px 100px -10px rgba(66, 71, 91, 0.1)' }}>
                <div className="grid grid-cols-4 items-center items-center w-[80%] mx-auto">
                    <div className="col-span-4 md:col-span-3">
                        <div className="text">
                            <h1 className="text-[30px] md:text-[45px] font-bold">Let’s try our service now!</h1>
                            <p className="text-[#ffffffb3] my-4">Everything you need to accept card payments <br/> and grow your business anywhere on the planet.</p>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-1">
                        <button style={{ backgroundImage: 'linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)' }} className="hover:scale-[1.1] transition duration-700 ease-in-out px-9 py-2.5 rounded-[15px] text-[#00040E] font-semibold">Get Start</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionService;

