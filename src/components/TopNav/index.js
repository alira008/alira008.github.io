import React, { useState } from "react";

const NavBar = () => {
  const [mobileLeft, setMobileLeft] = useState("translate-x-full");
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    mobileLeft === "translate-x-full"
      ? setMobileLeft("translate-x-0")
      : setMobileLeft("translate-x-full");
    setButtonClicked(!buttonClicked);
  };

  return (
    <header className="flex justify-between py-4 px-12 w-full items-center z-40 fixed text-slate-300 bg-navy-300/95 font-mono">
      <div className="text-4xl text-green-300 font-bold">
        <a href="#Home">AL</a>
      </div>
      <ol className="md:flex md:justify-between md:w-4/6 lg:w-5/12 md:text-sm hidden">
        <li>
          <a
            href="#About"
            className="p-3 flex items-center before:content-['01.'] hover:text-green-300 before:text-green-300 before:text-xs before:mr-2"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#Skills"
            className="p-3 flex items-center before:content-['02.'] hover:text-green-300 before:text-green-300 before:text-xs before:mr-2"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#Projects"
            className="p-3 flex items-center before:content-['03.'] hover:text-green-300 before:text-green-300 before:text-xs before:mr-2"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            className="p-3 flex items-center before:content-['04.'] hover:text-green-300 before:text-green-300 before:text-xs before:mr-2"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="/assets/resume/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 flex items-center text-green-300"
          >
            Resume
          </a>
        </li>
      </ol>
      <div class="md:hidden flex flex-col items-center">
        <button class="outline-none z-50 p-2" onClick={handleClick}>
          {buttonClicked ? (
            <i class="fas fa-times fa-lg text-green-300" />
          ) : (
            <i class="fas fa-bars fa-lg text-green-300" />
          )}
        </button>
        <div
          className={
            "fixed bg-navy-200/30 h-screen w-screen inset-y-0 flex justify-end transition text-xl font-medium md:hidden left-0 " +
            mobileLeft
          }
        >
          <ol className="bg-navy-200 w-9/12 sm:w-8/12 h-full py-16 flex flex-col items-center gap-y-3">
            <li className="w-full ">
              <a
                href="#About"
                className="p-3 w-full justify-center flex flex-col items-center before:content-['01.'] before:text-green-300 before:text-xs"
              >
                About
              </a>
            </li>
            <li className="w-full">
              <a
                href="#Skills"
                className="p-3 w-full justify-center flex flex-col items-center before:content-['02.'] before:text-green-300 before:text-xs"
              >
                Skills
              </a>
            </li>
            <li className="w-full">
              <a
                href="#Projects"
                className="p-3 w-full justify-center flex flex-col items-center before:content-['03.'] before:text-green-300 before:text-xs"
              >
                Projects
              </a>
            </li>
            <li className="w-full">
              <a
                href="#Contact"
                className="p-3 w-full justify-center flex flex-col items-center before:content-['04.'] before:text-green-300 before:text-xs"
              >
                Contact
              </a>
            </li>
            <li className="w-full">
              <a
                href="/assets/resume/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 w-full inline-block text-center text-green-300"
              >
                Resume
              </a>
            </li>
          </ol>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
