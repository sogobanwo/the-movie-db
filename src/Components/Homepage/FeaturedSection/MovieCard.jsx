import React from "react";

import tag from "../../../ImageResources/Tag.png";
import item from "../../../ImageResources/itemFruit.png";
import { Link } from "react-router-dom";
// import { FaHeart } from "react-icons/fa";

const MovieCard = ({
  title,
  poster_path,
  id,
  release_date,
  vote_average,
}) => {
  return (
    <Link to={`/movies/${id}`}>
    
    
    <div data-testid="movie-card" className="w-full md:w-[320px] lg:w-[250px] mb-4">
      <img
        data-testid="movie-poster"
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
        alt=""
        height={"370px"}
        className="rounded-lg w-[100%]"
      />
      <p
        className="mt-4 font-DMSans font-bold text-lightGrey"
        data-testid="movie-release-date"
      >
        {new Date(release_date).toUTCString()}
      </p>
      <h3 className="font-bold font-DMSans text-xl" data-testid="movie-title">
        {title}
      </h3>
      <div className="flex justify-between items-center mt-2">
        <div className="flex space-x-2">
          <img src={tag} alt="" />
          <p className="font-DMSans font-normal">{vote_average}/10</p>
        </div>
        <div className="flex space-x-2">
          <img src={item} alt="" />
          <p className="font-DMSans font-normal">75%</p>
        </div>
      </div>
      <p className="mt-2 font-DMSans font-bold text-lightGrey">Action, Drama</p>
      {/* <div className="flex justify-between absolute top-0 p-2 w-[5%] md:w-[4.3%]">
        <p className="bg-absBack p-2 rounded-full text-[10px] font-DMSans font-bold">
          TV SERIES
        </p>
        <div className="bg-absBack text-white p-2 rounded-full">
          <FaHeart />
        </div>
      </div> */}
    </div>
    </Link>
  );
};

export default MovieCard;
