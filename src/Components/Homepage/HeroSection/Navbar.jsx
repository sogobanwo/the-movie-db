import React, { useState } from "react";
import { FaBars, FaSearch, FaWindowClose } from "react-icons/fa";
import Movix from "../../../ImageResources/tv.png";
import { Link } from "react-router-dom";
import calender from "../../../ImageResources/Calendar.png";
import Home from "../../../ImageResources/Home.png";
import Movie from "../../../ImageResources/Movie-Projector.png";
import tv from "../../../ImageResources/TV-Show.png";
import Logout from "../../../ImageResources/Logout.png";
import { search } from "../../../Services/MovieServices";
import { toast } from "react-toastify";
import { BallTriangle } from "react-loader-spinner";

const Navbar = ({searchQuery, setSearchQuery, setIsFetching, isFetching}) => {
  const [nav, setNav] = useState(false);


  const handleNav = () => {
    setNav(!nav);
  };


  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      toast.error("Please enter a movie title.");
    } else {
      search(searchQuery);
    }
  };

  if (isFetching) {
    return (
      <div className="spinner">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#000"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <>
      <div className="pt-6 mx-[7.5%] flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <img src={Movix} alt="movixTv" width={40} height={40} />
          <h3 className="font-bold font-DMSans text-.5xl text-white md:text-2xl">
            Movix
          </h3>
        </div>
        <div className="w-[40%] hidden md:flex">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="What do you want to watch?"
            className="border border-white text-white rounded-md p-1 bg-transparent w-[100%]"
          />
          <button
            className="relative left-[93%] -mt-7 mb-3 inset-0"
            onClick={handleSearch}
          >
            <FaSearch size={20} color={"lightgrey"} />
          </button>
        </div>
        <div className="flex space-x-4 items-center">
          <div
            className="bg-darkRed text-white p-2 rounded-full cursor-pointer"
            onClick={handleNav}
          >
            {nav ? <FaWindowClose size={20} /> : <FaBars size={20} />}
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[70%] h-full border-r-2 bg-gray-800 text-white border-lightGrey z-10 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <Link to={"/"}>
          <div className="flex space-x-4 items-center px-4 pt-8">
            <img src={Movix} alt="movixTv" width={40} height={40} />
            <h3 className="font-bold font-DMSans text-2xl text-white md:text-2xl">
              Movix
            </h3>
          </div>
        </Link>
        <ul className="pt-12">
          <Link to={"/"}>
            <li className="p-4 flex just items-center space-x-4 text-2xl border-b-2 border-lightGrey cursor-pointer">
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
            </li>
          </Link>
          <li className="p-4 flex just items-center space-x-4 text-2xl border-b-2 border-lightGrey cursor-pointer">
            <div className="w-[50px] flex justify-start">
              <img src={Movie} alt="Movie" />
            </div>
            <p className={"text-sm text-[#BE123C] font-semibold font-poppins"}>
              Movies{" "}
            </p>
          </li>
          <li className="p-4 flex just items-center space-x-4 text-2xl border-b-2 border-lightGrey cursor-pointer">
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
          </li>
          <li className="p-4 flex just items-center space-x-4 text-2xl border-b-2 border-lightGrey cursor-pointer">
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
          </li>
          <li className="p-4 flex just items-center space-x-4 text-2xl border-b-2 border-lightGrey cursor-pointer">
            <div className="w-[50px] flex justify-start">
              <img src={Logout} alt="calender" />
            </div>
            <p
              className={
                "text-sm text-[#666666] font-semibold font-poppins  hover:text-[#BE123C]"
              }
            >
              Logout
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
