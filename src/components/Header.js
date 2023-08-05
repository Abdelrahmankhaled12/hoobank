import logo from "../images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
const Header = () => {

    const [state, setstate] = useState(false);
    return (
        <header className="py-5">
            <nav className="container">
                <div className="flex justify-between items-center">
                    <img src={logo} alt="..." className="w-[150px]" />
                    <div className="flex">
                        <ul className="space-x-10 items-center hidden md:flex">
                            <li className="font-semibold cursor-pointer">Home</li>
                            <li className="text-[#ffffffb3] font-semibold cursor-pointer duration-500 hover:text-white">About Us</li>
                            <li className="text-[#ffffffb3] font-semibold cursor-pointer duration-500 hover:text-white">Features</li>
                            <li className="text-[#ffffffb3] font-semibold cursor-pointer duration-500 hover:text-white">Solution</li>
                        </ul>
                        <FontAwesomeIcon icon={faBars} className="text-[25px] md:hidden block cursor-pointer" onClick={() => setstate(!state)} />
                    </div>
                </div>
                {state && <ul className="my-5 space-y-5 md:hidden block">
                    <li className="font-semibold cursor-pointer">Home</li>
                    <li className="text-[#ffffffb3] font-semibold cursor-pointer duration-500 hover:text-white">About Us</li>
                    <li className="text-[#ffffffb3] font-semibold cursor-pointer duration-500 hover:text-white">Features</li>
                    <li className="text-[#ffffffb3] font-semibold cursor-pointer duration-500 hover:text-white">Solution</li>
                </ul>}

            </nav>
        </header>

    );
};

export default Header;
