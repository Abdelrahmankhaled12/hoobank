import airbnb from "../images/airbnb.png"
import binance from "../images/binance.png"
import coinbase from "../images/coinbase.png"
import dropbox from "../images/dropbox.png"



const Images = () => {
    return (
        <div className="py-[40px] wow animate__fadeInUp" data-wow-duration="2s">
            <div className="container">
                <div className="grid grid-cols-4 justify-items-center items-center">
                    <div className="col-span-4 sm:col-span-2  md:col-span-2 lg:col-span-1 my-[15px]">
                        <img src={airbnb} alt="..." className="w-[150px]" />
                    </div>
                    <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 my-[15px]">
                        <img src={binance} alt="..."  className="w-[150px]" />
                    </div>
                    <div className="col-span-4 sm:col-span-2  md:col-span-2 lg:col-span-1 my-[15px]">
                        <img src={coinbase} alt="..." className="w-[150px]"  />
                    </div>
                    <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 my-[15px]">
                        <img src={dropbox} alt="..."  className="w-[150px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Images;
