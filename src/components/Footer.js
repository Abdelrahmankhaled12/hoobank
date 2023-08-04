import logo from "../images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <footer className="bg-[rgba(11,10,12,0.6)] py-[40px]">
            <div className="container py-[30px]">
                <div className="grid grid-cols-4 md:justify-items-center border-b-[1px] border-solid border-[rgba(63,62,69,64%)] pb-9">
                    <div className="col-span-4 sm:col-span-2  md:col-span-2 lg:col-span-1 my-[15px]">
                        <img src={logo} alt="..." />
                        <p className="text-[rgba(255,255,255,0.7)] my-4">A new way to make the payments easy, reliable and secure.</p>
                    </div>
                    <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 my-[15px]">
                        <h1 className="text-[20px] font-semibold">Usefull Links</h1>
                        <ul>
                            <li className="text-[rgba(255,255,255,0.7)] my-2 cursor-pointer duration-500 hover:text-[#f7f8fc] hover:tracking-[1.4px]">Content</li>
                            <li className="text-[rgba(255,255,255,0.7)] my-2 cursor-pointer duration-500 hover:text-[#f7f8fc] hover:tracking-[1.4px]">How it Works</li>
                            <li className="text-[rgba(255,255,255,0.7)] my-2 cursor-pointer duration-500 hover:text-[#f7f8fc] hover:tracking-[1.4px]">Create</li>
                            <li className="text-[rgba(255,255,255,0.7)] my-2 cursor-pointer duration-500 hover:text-[#f7f8fc] hover:tracking-[1.4px]">Explore</li>
                            <li className="text-[rgba(255,255,255,0.7)] my-2 cursor-pointer duration-500 hover:text-[#f7f8fc] hover:tracking-[1.4px]">Terms & Services</li>
                        </ul>
                    </div>
                    <div className="col-span-4 sm:col-span-2  md:col-span-2 lg:col-span-1 my-[15px]">
                        <h1 className="text-[20px] font-semibold">Community</h1>
                        <ul>
                            <li className="text-[rgba(255,255,255,0.7)] my-2 cursor-pointer duration-500 hover:text-[#f7f8fc] hover:tracking-[1.4px]">Help Center</li>
                            <li className="text-[rgba(255,255,255,0.7)] my-2 cursor-pointer duration-500 hover:text-[#f7f8fc] hover:tracking-[1.4px]">Partners</li>
                            <li className="text-[rgba(255,255,255,0.7)] my-2 cursor-pointer duration-500 hover:text-[#f7f8fc] hover:tracking-[1.4px]">Suggestions</li>
                            <li className="text-[rgba(255,255,255,0.7)] my-2 cursor-pointer duration-500 hover:text-[#f7f8fc] hover:tracking-[1.4px]">Blog</li>
                            <li className="text-[rgba(255,255,255,0.7)] my-2 cursor-pointer duration-500 hover:text-[#f7f8fc] hover:tracking-[1.4px]">Newsletters</li>
                        </ul>
                    </div>
                    <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 my-[15px]">
                        <h1 className="text-[20px] font-semibold">Partner</h1>
                        <ul>
                            <li className="text-[rgba(255,255,255,0.7)] my-2 cursor-pointer duration-500 hover:text-[#f7f8fc] hover:tracking-[1.4px]">Our Partner</li>
                            <li className="text-[rgba(255,255,255,0.7)] my-2 cursor-pointer duration-500 hover:text-[#f7f8fc] hover:tracking-[1.4px]">Become a Partner</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between mt-3 flex-col items-center sm:flex-row sm:items-start">
                    <p className="mt-4 text-[rgba(255,255,255,0.6)] text-[15px]">Copyright 2021 HooBank. All Rights Reserved.</p>
                    <div className="flex space-x-4 mt-4">
                        <FontAwesomeIcon icon={faInstagram} className="text-[20px]" />
                        <FontAwesomeIcon icon={faFacebook} className="text-[20px]" />
                        <FontAwesomeIcon icon={faTwitter} className="text-[20px]" />
                        <FontAwesomeIcon icon={faLinkedin} className="text-[20px]" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;