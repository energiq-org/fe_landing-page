import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };
  return (
    <nav className="w-full z-30 top-0 pb-20 lg:pb-8 pt-9 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center rtl:space-x-reverse">
          <img src="logo.svg" alt="Logo" className="h-8 lg:h-10 2xl:h-14" />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="md:flex hidden border-2 rounded-br-xl border-[#BF4E30] text-[#BF4E30] font-medium text-sm px-4 py-2 text-center items-center gap-x-1 2xl:py-2 2xl:text-xl"
          >
            Download The App{" "}
            <Icon icon="tabler:arrow-up-right" width="16" height="16" />
          </button>
          <button
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#BF4E30] md:hidden ml-3"
            onClick={() => setMenuOpen(true)}
          >
            <Icon icon="uil:align-justify" width="24" height="24" />
          </button>
        </div>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } fixed top-0 right-0 h-full w-72 z-40 flex-col bg-black/90 md:bg-zinc-800/60 md:rounded-[30px] outline outline-1 outline-offset-[-1px] outline-neutral-700/90 overflow-hidden py-2 px-4 transition-transform duration-300 ease-in-out md:static md:flex md:flex-row md:h-auto md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } w-full justify-end mb-4`}
          >
            {menuOpen && (
              <Icon
                icon="ri:close-fill"
                width="32"
                height="32"
                className="text-white my-5 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            )}
          </div>
          <ul className="flex flex-col md:flex-row gap-2 lg:space-x-8 w-full ">
            <li className="flex-1 my-1 md:my-0">
              <button
                onClick={() => scrollToSection("dashboard")}
                className="block w-full text-start text-xl py-1 px-5 text-white rounded-2xl  md:border border-solid border-gray-400 md:text-center hover:bg-[#9c3d26] hover:border-[#9c3d26] transition-all duration-500 ease-in-out md:text-base lg:text-md 2xl:text-xl 2xl:py-2"
              >
                Dashboard
              </button>
            </li>

            <li className="flex-1 my-1 md:my-0">
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-start text-xl py-1 px-5 text-white rounded-3xl  md:border border-solid border-gray-400 md:text-center hover:bg-[#9c3d26] hover:border-[#9c3d26] transition-all duration-500 ease-in-out md:text-base lg:text-md 2xl:text-xl 2xl:py-2"
              >
                Features
              </button>
            </li>

            <li className="flex-1 my-1 md:my-0">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-start text-xl py-1 px-5 text-white rounded-2xl  md:border border-solid border-gray-400 md:text-center hover:bg-[#9c3d26] hover:border-[#9c3d26] transition-all duration-500 ease-in-out md:text-base lg:text-md 2xl:text-xl 2xl:py-2"
              >
                Services
              </button>
            </li>

            <li className="flex-1 my-1 md:my-0">
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-start text-xl py-1 px-5 text-white rounded-2xl  md:border border-solid border-gray-400 md:text-center hover:bg-[#9c3d26] hover:border-[#9c3d26] transition-all duration-500 ease-in-out md:text-base lg:text-md 2xl:text-xl 2xl:py-2"
              >
                Contact
              </button>
            </li>

            <li className="md:hidden flex-1 my-1 md:my-0">
              <button
                type="button"
                className="border-2 rounded-br-xl border-[#BF4E30] text-[#BF4E30] font-medium text-sm px-4 py-2 text-center flex items-center gap-x-1 2xl:py-2 2xl:text-xl"
              >
                Download The App{" "}
                <Icon icon="tabler:arrow-up-right" width="16" height="16" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
