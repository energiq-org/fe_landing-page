import LOGO from '../../assets/logo.png';
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="w-full z-20 top-0 pt-4 start-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center rtl:space-x-reverse">
                    <img src={LOGO} className="h-8" alt="Logo" />
                </Link>
                
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="border-2 rounded-br-xl border-[#BF4E30] text-[#BF4E30] font-medium text-sm px-4 py-2 text-center flex items-center gap-x-1">
                        Download The App <Icon icon="tabler:arrow-up-right" width="16" height="16" />
                    </button>
                </div>
                
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 bg-zinc-800/60 rounded-[30px] outline outline-1 outline-offset-[-1px] outline-neutral-700/90 overflow-hidden p-3" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 w-full">
                        
                        <li className="flex-1">
                            <Link to="/" className="block py-1 px-5 text-white rounded-2xl border-2 border-solid border-gray-400 text-center hover:bg-[#9c3d26] hover:border-[#9c3d26] transition-all duration-500 ease-in-out">
                                Home
                            </Link>
                        </li>

                        <li className="flex-1">
                            <Link to="/dashboard" className="block py-1 px-5 text-white rounded-2xl border-2 border-solid border-gray-400 text-center hover:bg-[#9c3d26] hover:border-[#9c3d26] transition-all duration-500 ease-in-out">
                                Dashboard
                            </Link>
                        </li>

                        <li className="flex-1">
                            <Link to="/services" className="block py-1 px-5 text-white rounded-2xl border-2 border-solid border-gray-400 text-center hover:bg-[#9c3d26] hover:border-[#9c3d26] transition-all duration-500 ease-in-out">
                                Services
                            </Link>
                        </li>

                        <li className="flex-1">
                            <Link to="/contact" className="block py-1 px-5 text-white rounded-2xl border-2 border-solid border-gray-400 text-center hover:bg-[#9c3d26] hover:border-[#9c3d26] transition-all duration-500 ease-in-out">
                                Contact
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
