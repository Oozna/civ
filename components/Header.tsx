import { SunIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="shadow-lg bg-[#ecf0f3] flex justify-end">
      <div className=" flex items-end justify-between">
        <nav className="flex items-end space-x-2 md:space-x-10">
          <ul className="hidden space-x-4 md:flex">
            <Link href="/">
              <li className="headerLink">Start</li>
            </Link>
            <Link href="/explore">
              <li className="headerLink">Utforska</li>
            </Link>
            <Link href="/followthrough">
              <li className="headerLink">Antal Examinerade</li>
            </Link>
            <Link href="/contact">
              <li className="headerLink">Kontakt</li>
            </Link>
          </ul>

          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </nav>
      </div>
      <div
        className={
          nav
            ? "md:hidden md:flex-grow-0 fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-200"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-200"
          }
        >
          <div className="flex w-full justify-end">
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose size={25} className="" />
            </div>
          </div>
          <div>
            <p>Hoppas du hittar något informativt</p>
          </div>
          <div className="p-4 flex flex-col">
            <ul>
              <Link href="/">
                <li className="headerLinkMobile">Start</li>
              </Link>
              <Link href="/explore">
                <li className="headerLinkMobile">Utforska</li>
              </Link>
              <Link href="/followthrough">
                <li className="headerLinkMobile">Antal Examinerade</li>
              </Link>
              <Link href="/contact">
                <li className="headerLinkMobile">Kontakt</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
