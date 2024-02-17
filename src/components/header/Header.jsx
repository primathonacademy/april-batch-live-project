import { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("WORK");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const setActive = (link) => {
    setActiveLink(link);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed top-0 w-full bg-white z-50  ">
      <div className=" container mx-auto px-3">
        <div className="flex justify-between  items-center py-4">
          <div className="flex  gap-2 md:gap-8  justify-center items-center">
            <img src="/src/assets/logo.svg" alt="" className="" />
            <img src="/src/assets/logo+.svg" alt="" />
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-24 md:gap-5 xl:gap-24  lg:gap-16  items-center font-semibold text-gray-400 ">
              <li>
                <a
                  href="#"
                  className={`text-gray-400 ${
                    activeLink === "WORK" ? "text-gray-700" : ""
                  }`}
                  onClick={() => setActive("WORK")}
                >
                  WORK
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-gray-400 ${
                    activeLink === "SERVICES" ? "text-gray-700" : ""
                  }`}
                  onClick={() => setActive("SERVICES")}
                >
                  SERVICES
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-gray-400 ${
                    activeLink === "ABOUT US" ? "text-gray-700" : ""
                  }`}
                  onClick={() => setActive("ABOUT US")}
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-gray-400 ${
                    activeLink === "LABS" ? "text-gray-700" : ""
                  }`}
                  onClick={() => setActive("LABS")}
                >
                  LABS
                </a>
              </li>
              <button className="bg-[#0A66EC] text-white rounded-full opacity-1 px-8 py-3 text-opacity-90 hover:bg-gradient-to-r from-blue-600 from-30%  to-pink-400">
                <a href="#">CONTACT US</a>
              </button>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none transform transition-transform duration-500 ease-in-out"
              style={{
                transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
              }}
            >
              {isMenuOpen ? (
                <span className="text-3xl  text-[#253F9C]">&#10005;</span>
              ) : (
                <span className="text-3xl text-[#253F9C]">&#9776;</span>
              )}
            </button>
          </div>
        </div>
        <div
          className={`space-y-4 px-4 mt-16 py-7 transition-all duration-300 ease-in  ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-4 mt-8">
            <li>
              <a
                href="#"
                className={`block font-semibold text-gray-400 ${
                  activeLink === "WORK" ? "text-gray-700" : ""
                }`}
                onClick={() => setActive("WORK")}
              >
                WORK
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block font-semibold text-gray-400 ${
                  activeLink === "SERVICES" ? "text-gray-700" : ""
                }`}
                onClick={() => setActive("SERVICES")}
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block font-semibold text-gray-400 ${
                  activeLink === "ABOUT US" ? "text-gray-700" : ""
                }`}
                onClick={() => setActive("ABOUT US")}
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block font-semibold text-gray-400 ${
                  activeLink === "LABS" ? "text-gray-700" : ""
                }`}
                onClick={() => setActive("LABS")}
              >
                LABS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
