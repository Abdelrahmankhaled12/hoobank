const SectionBetterCard = () => {
    return (
        <div className="container py-[40px] wow animate__fadeInUp" data-wow-duration="2s">
            <div className="grid grid-cols-2 items-center">
                <div className="col-span-2 md:col-span-1 mt-5">
                    <div className="text">
                        <h1 className="text-[30px] md:text-[45px] font-bold">Find a better card deal in few easy steps.</h1>
                        <p className="text-[#ffffffb3] my-4">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                        <button style={{backgroundImage: 'linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)'}} className="hover:scale-[1.1] transition duration-700 ease-in-out px-9 py-2.5 rounded-[15px] text-[#00040E] font-semibold">Get Start</button>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1 mt-5">
                    <div>
                        <img src={require("../images/sectionBetterCard.png")} alt="..." className="w-[450px] mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionBetterCard;