import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight } from "react-icons/fa";
import MovieCard from "./MovieCard";
import { BallTriangle } from "react-loader-spinner";

const Featured = ({ isFetching, movies}) => {
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
      <div className="flex justify-between mx-[7.5%] items-center">
        <h1 className="text-2xl font-bold font-DMSans md:text-4xl">
          Featured Movie
        </h1>
        <button className="flex space-x-4 font-DMSans text-darkRed items-center">
          See more{" "}
          <span className="ml-2">
            <FaChevronRight />
          </span>
        </button>
      </div>
      <div className="my-[30px] flex flex-wrap justify-evenly mx-[7.5%]">
        
        {movies.map((movie) => {
          return (
            <MovieCard key={movie.id} {...movie} data-testid="movie-card" />
          );
        })}
      </div>
    </>
  );
};

export default Featured;
