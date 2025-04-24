import LOGO from '../../assets/logo.png';
import { Icon } from "@iconify/react";

const Navbar = ()=>{
    return(
        <nav className=" w-full z-20 top-0 pt-4 start-0 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="" className="flex items-center  rtl:space-x-reverse">
      <img src={LOGO} className="h-8" alt="Flowbite Logo" />
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="border-2 rounded-br-xl border-[#BF4E30] text-[#BF4E30] border-br- font-medium  text-sm px-4 py-2 text-center flex items-center gap-x-1">
        Download The App <Icon icon="tabler:arrow-up-right" width="16" height="16"   /></button>
      
      
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
  <ul className="flex flex-col p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 w-full">
    <li className="flex-1">
      <a href="#" className="block py-1 px-5 text-white rounded-2xl border-2 border-solid border-gray-400 text-center hover:bg-[#9c3d26] hover:border-[#9c3d26] transition-all duration-500 ease-in-out" aria-current="page">Home</a>
    </li>

    <li className="flex-1">
      <a href="#" className="block py-1 px-5 text-white rounded-2xl border-2 border-solid border-gray-400 text-center hover:bg-[#9c3d26] hover:border-[#9c3d26] transition-all duration-500 ease-in-out" aria-current="page">Services</a>
    </li>

    <li className="flex-1">
      <a href="#" className="block py-1 px-5 text-white rounded-2xl border-2 border-solid border-gray-400 text-center hover:bg-[#9c3d26] hover:border-[#9c3d26] transition-all duration-500 ease-in-out" aria-current="page">Contact</a>
    </li>
  </ul>
</div>

  </div>
</nav>
    )
}

export default Navbar;