import React from "react";

const Header = () => {
  return (
    <div className="w-[95%] mx-auto max-w-[1440px] md:w-[90%] flex h-[80px] shadow-sm items-center justify-between">
      <h1 className="font-bold text-[36px] uppercase">Logo</h1>
      <ul className="flex items-center gap-[30px]">
        <li className="text-[16px] hover:text-primary cursor-pointer transition-all ease-in">
          Home
        </li>
        <li className="text-[16px] hover:text-primary cursor-pointer transition-all ease-in">
          Water Quality Index
        </li>
        <li className="text-[16px] hover:text-primary cursor-pointer transition-all ease-in">
          Air Quality Index
        </li>
      </ul>
    </div>
  );
};

export default Header;
