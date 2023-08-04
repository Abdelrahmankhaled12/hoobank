const Numbers = () => {
    return (
        <div className="py-[40px] wow animate__fadeInUp" data-wow-duration="2s">
            <div className="container">
                <div className="grid grid-cols-3 justify-items-center items-center ">
                    <div className="col-span-3  md:col-span-1 my-[15px] w-[100%]">
                        <div className="flex items-center relative w-[100%] justify-center md:justify-start md:before:content-[''] before:h-[20%] before:w-[2.5px] md:before:bg-[rgba(255,255,255,0.6)] before:absolute before:right-[20%] before:top-[45%]">
                            <h1 className="text-[40px] font-bold">3800+</h1>
                            <p className="ms-2 font-semibold text-[20px]" style={{ background: 'linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)' , WebkitTextFillColor : 'transparent' , WebkitBackgroundClip:'text'}}>User Active</p>
                        </div>
                    </div>
                    <div className="col-span-3  md:col-span-1 my-[15px] w-[100%]">
                    <div className="flex items-center relative w-[100%] justify-center md:justify-start md:before:content-[''] before:h-[20%] before:w-[2.5px] md:before:bg-[rgba(255,255,255,0.6)] before:absolute before:right-[10%] before:top-[45%]">
                            <h1 className="text-[40px] font-bold">230+</h1>
                            <p className="ms-2 font-semibold text-[20px]" style={{ background: 'linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)' , WebkitTextFillColor : 'transparent' , WebkitBackgroundClip:'text'}}>TRUSTED BY COMPANY</p>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1 my-[15px] w-[100%]">
                    <div className="flex items-center  justify-center md:justify-start ">
                            <h1 className="text-[40px] font-bold">$230M+</h1>
                            <p className="ms-2 font-semibold text-[20px]" style={{ background: 'linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)' , WebkitTextFillColor : 'transparent' , WebkitBackgroundClip:'text'}}>TRANSACTION</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Numbers;
