import React from "react";
import Movix from "../../ImageResources/tv.png";

import calender from "../../ImageResources/Calendar.png";
import Home from "../../ImageResources/Home.png";
import Movie from "../../ImageResources/Movie-Projector.png";
import tv from "../../ImageResources/TV-Show.png";
import Logout from "../../ImageResources/Logout.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col fixed justify-between py-[3%] items-center border-[2px] w-[12%] rounded-tr-[45px] rounded-br-[45px] space-y-4 h-full">
      <Link to={"/"}>
        <div className="flex items-center justify-center gap-1">
          <img src={Movix} alt="movixTv" width={30} height={30} />
          <h3 className="font-extrabold font-DMSans text-base text-[#333333]">
            MovieBox
          </h3>
        </div>
      </Link>
      <div className="w-full">
        <Link to={"/"}>
          <div className="flex items-center justify-start w-full p-2 hover:bg-[#BE123C]/10 hover:border-r-[4px] hover:border-r-[#BE123C] hover:text-[#BE123C]">
            <div className="w-[50px] flex justify-start">
              <img src={Home} alt="home" />
            </div>
            <p
              className={
                "text-sm text-[#666666] font-semibold font-poppins hover:text-[#BE123C]"
              }
            >
              Home
            </p>
          </div>
        </Link>

        <div className="flex items-center justify-start space-y-1 w-full p-2 bg-[#BE123C]/10 border-r-[4px] border-r-[#BE123C] text-[#BE123C]">
          <div className="w-[50px] flex justify-start">
            <img src={Movie} alt="Movie" />
          </div>
          <p className={"text-sm text-[#BE123C] font-semibold font-poppins"}>
            Movies{" "}
          </p>
        </div>
        <div className="flex items-center justify-start space-y-1 w-full p-2  hover:bg-[#BE123C]/10 hover:border-r-[4px] hover:border-r-[#BE123C] hover:text-[#BE123C]">
          <div className="w-[50px] flex justify-start">
            <img src={tv} alt="tv" />
          </div>
          <p
            className={
              "text-sm text-[#666666] font-semibold font-poppins  hover:text-[#BE123C]"
            }
          >
            TV Series
          </p>
        </div>

        <div className="flex items-center justify-start space-y-1 w-full p-2  hover:bg-[#BE123C]/10 hover:border-r-[4px] hover:border-r-[#BE123C] hover:text-[#BE123C]">
          <div className="w-[50px] flex justify-start">
            <img src={calender} alt="calender" />
          </div>
          <p
            className={
              "text-sm text-[#666666] font-semibold font-poppins  hover:text-[#BE123C]"
            }
          >
            Upcoming
          </p>
        </div>
      </div>
      <div className="border-[1px] border-[#BE123C]/40 bg-[#F8E7EB]/40 rounded-md p-2 mx-3">
        <h6 className="font-poppins text-[#333333]/80 text-[12px] font-medium mb-2">
          Play movie quizes and earn free tickets
        </h6>
        <p className="font-poppins text-[#666666] text-[10px] mb-2">
          50k people are playing now
        </p>
        <button className="font-poppins text-[#BE123C] bg-[#BE123C]/20 text-xs flex justify-center px-2 py-1 rounded-full">
          Start playing
        </button>
      </div>
      <div className="flex items-center justify-start space-y-1 w-full p-2  hover:bg-[#BE123C]/10 hover:border-r-[4px] hover:border-r-[#BE123C] hover:text-[#BE123C]">
        <div className="w-[50px] flex justify-start">
          <img src={Logout} alt="Logout" />
        </div>
        <p className="text-sm text-[#666666] font-semibold font-poppins  hover:text-[#BE123C]">
          Log out
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
