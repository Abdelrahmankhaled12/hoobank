import appStore from"../images/appStore.svg"
import googlePlay from"../images/googlePlay.svg"


const SectionEasilyControl = () => {
    return (
        <div className="container py-[40px] wow animate__fadeInUp" data-wow-duration="2s">
            <div className="grid grid-cols-2 items-center">
                <div className="col-span-2 md:col-span-1 mt-5">
                    <div>
                        <img src={require("../images/SectionEasilyControl.png")} alt="..." className="w-[450px] mx-auto" />
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1 mt-5">
                    <div className="text">
                        <h1 className="text-[30px] md:text-[45px] font-bold">Easily control your billing & invoicing.</h1>
                        <p className="text-[#ffffffb3] my-6">Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                        <div className="flex space-x-3">
                            <img src={appStore} alt="..."/>
                            <img src={googlePlay} alt="..."/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SectionEasilyControl;