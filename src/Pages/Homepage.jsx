import React, { useEffect, useState } from "react";
import Featured from "../Components/Homepage/FeaturedSection/Featured";
import Footer from "../Components/SharedComponents/Footer.jsx";
import HeroSection from "../Components/Homepage/HeroSection/HeroSection";
import { getFeaturedMovies, search } from "../Services/MovieServices";
import { toast } from "react-toastify";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      setIsFetching(true);
      const res = async () => {
        try {
          const movies = await search(searchQuery);
          const top10Movies = movies.slice(0, 10);
          setMovies(top10Movies);
        } catch (error) {
          toast.error(error);
        }
        setIsFetching(false);
      };
      res();
    } else {
      const res = async () => {
        try {
          const movies = await getFeaturedMovies();
          const top10Movies = movies.slice(0, 10);
          setMovies(top10Movies);
          setIsFetching(false);
        } catch (error) {
          toast.error(error);
        }
      };
      res();
    }
  }, [searchQuery, setIsFetching]);

  return (
    <div className="overflow-x-hidden">
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isFetching={isFetching}
        setIsFetching={setIsFetching}
      />
      <Featured
        searchQuery={searchQuery}
        isFetching={isFetching}
        setIsFetching={setIsFetching}
        movies={movies}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
