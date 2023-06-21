import React, { useState } from "react";

const NavBarLinkButton = ({ name, itemNumber, isMobileButton }) => {
  const styling = isMobileButton
    ? `flex flex-col justify-center items-center p-3 w-full before:content-['${itemNumber}.'] before:text-green-300 before:text-xs`
    : `flex items-center p-3 before:content-['${itemNumber}.'] hover:text-green-300 before:text-green-300 before:text-xs before:mr-2`;
  return (
    <a href={`#${name}`} className={styling}>
      {name}
    </a>
  );
};

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
    <header className="flex fixed z-40 justify-between items-center py-4 px-12 w-full font-mono text-slate-300 bg-navy-300/95">
      <div className="text-4xl font-bold text-green-300">
        <a href="#Home">AL</a>
      </div>
      <ol className="hidden md:flex md:justify-between md:w-4/6 md:text-sm lg:w-5/12">
        <li>
          <NavBarLinkButton name={"About"} itemNumber={"01"} />
        </li>
        <li>
          <NavBarLinkButton name={"Skills"} itemNumber={"02"} />
        </li>
        <li>
          <NavBarLinkButton name={"Jobs"} itemNumber={"03"} />
        </li>
        <li>
          <NavBarLinkButton name={"Projects"} itemNumber={"04"} />
        </li>
        <li>
          <NavBarLinkButton name={"Contact"} itemNumber={"05"} />
        </li>
        <li>
          <a
            href="/assets/resume/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 text-green-300"
          >
            Resume
          </a>
        </li>
      </ol>
      <div class="flex flex-col items-center md:hidden">
        <button class="z-50 p-2 outline-none" onClick={handleClick}>
          {buttonClicked ? (
            <i class="text-green-300 fas fa-times fa-lg" />
          ) : (
            <i class="text-green-300 fas fa-bars fa-lg" />
          )}
        </button>
        <div
          className={
            "fixed bg-navy-200/30 h-screen w-screen inset-y-0 flex justify-end transition text-xl font-medium md:hidden left-0 " +
            mobileLeft
          }
        >
          <ol className="flex flex-col gap-y-3 items-center py-16 w-9/12 h-full sm:w-8/12 bg-navy-200">
            <li className="w-full">
              <NavBarLinkButton
                name={"About"}
                itemNumber={"01"}
                isMobileButton
              />
            </li>
            <li className="w-full">
              <NavBarLinkButton
                name={"Skills"}
                itemNumber={"02"}
                isMobileButton
              />
            </li>
            <li className="w-full">
              <NavBarLinkButton
                name={"Jobs"}
                itemNumber={"03"}
                isMobileButton
              />
            </li>
            <li className="w-full">
              <NavBarLinkButton
                name={"Projects"}
                itemNumber={"04"}
                isMobileButton
              />
            </li>
            <li className="w-full">
              <NavBarLinkButton
                name={"Contact"}
                itemNumber={"05"}
                isMobileButton
              />
            </li>
            <li className="w-full">
              <a
                href="/assets/resume/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block p-3 w-full text-center text-green-300"
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
