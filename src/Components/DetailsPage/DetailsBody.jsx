import React from "react";
import SeptMovie from "../../ImageResources/BestMovies.png";
import TwoTicket from "../../ImageResources/Two-Tickets.png";
import list from "../../ImageResources/List.png";
import star from "../../ImageResources/Star.png";
import watch from "../../ImageResources/watch.png";
import Navbar from "../Homepage/HeroSection/Navbar";

const DetailsBody = ({ details }) => {
  return (
    <>
      <div className="md:hidden  bg-gray-800 -mt-3 pb-2">
        <Navbar />
      </div>
      <div className="mx-[4%] w-[92%] md:ml-[16%] md:w-[80%] ">
        <div className="py-3 h-[449px] relative">
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${details.backdrop_path}`}
            alt=""
            className="relative flex justify-center items-center w-full h-full"
          />
          <div className="flex justify-center items-center w-full h-full absolute inset-0">
            <img src={watch} alt="" className=" " />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="">
            <div className="flex flex-col md:flex-row items-center gap-2 mb-4">
              <h1
                className="text-lg font-poppins text-[#404040]"
                data-testid="movie-title"
              >
                {details.title}
              </h1>
              <ul className="flex gap-2">
                <li
                  className="text-lg font-poppins text-[#404040]"
                  data-testid="movie-release-date"
                >
                  {" "}
                  • {new Date(details.release_date).toUTCString()}
                </li>
                <li className="text-lg font-poppins text-[#404040]">
                  {" "}
                  • {details.runtime} mins
                </li>
              </ul>
              <div className="flex justify-center items-center mr-2 gap-2 mb-1 md:hidden">
                <img src={star} alt="" />
                <p className="text-sm text-[#666666] font-poppins">
                  <span className="text-sm text-[#E8E8E8]">8.5</span> | 350k
                </p>
              </div>
            </div>
            <p className="text-sm font-poppins text-[#333333] mb-8">
              {details.overview}
            </p>
            <p className="text-sm font-poppins text-[#333333] mb-6">
              Tagline :
              <span className="text-[#BE123C]"> {details.tagline}</span>
            </p>
            <p className="text-sm font-poppins text-[#333333] mb-6">
              Status :<span className="text-[#BE123C]"> {details.status} </span>
            </p>
            <p className="text-sm font-poppins text-[#333333] mb-6">
              Original Title :
              <span className="text-[#BE123C]">
                {" "}
                {details.original_title}{" "}
              </span>
            </p>
            <div className="flex justify-center items-center md:justify-start before:">
              <button className="flex justify-center items-center gap-4 w-[280px] h-[40px] bg-[#BE123C] text-white text-xl rounded-xl mb-4">
                <p className="font-poppins text-sm">Top rated movie #65</p>
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex justify-end items-center mr-2 gap-2 mb-4">
              <img src={star} alt="" />
              <p className="text-sm text-[#666666] font-poppins">
                <span className="text-sm text-[#E8E8E8]">
                  {details.vote_average}
                </span>{" "}
                | {details.vote_count}
              </p>
            </div>
            <button className="flex  justify-center items-center gap-4 w-[280px] h-[40px] bg-[#BE123C] text-white text-sm rounded-xl mb-4">
              <img src={TwoTicket} alt="" />
              <p className="font-poppins text-sm">See Showtime</p>
            </button>
            <button className="flex justify-center items-center gap-4 w-[280px] h-[40px] bg-[#F8E7EB]/40  border-[#BE123C]/40 text-[#666666] text-sm border-[1px] rounded-xl mb-6">
              <img src={list} alt="list" />
              <p className="font-poppins text-sm">More Watch Options</p>
            </button>
            <img src={SeptMovie} alt="BestMovies for september" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsBody;
