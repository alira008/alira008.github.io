import React, { useEffect, useState } from "react";

const SideBar = ({ right, children }) => {
  const [location, setLocation] = useState("left-10");

  useEffect(() => {
    if (right) {
      setLocation("right-10");
    }
  }, []);

  return (
    <div
      className={`hidden md:inline-block fixed ${location} bottom-0 w-10 text-slate-400`}
    >
      <div className="flex flex-col items-center after:mt-5 after:w-px after:h-44 after:block after:bg-slate-300">
        {children}
      </div>
    </div>
  );
};

export default SideBar;
