import axios from "axios"
import { toast } from "react-toastify"


export const getFeaturedMovies =async()=>{
  try {
    const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=41643a7c482e6b1bb470796857111a25&language=en-US&page=1")
    return await response.data.results
  } catch (error) {
    toast.error(error)
  }
}

export const eachMovie = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=41643a7c482e6b1bb470796857111a25&language=en-US&page=1`
    );
    const res = response.data;
    return res;
  } catch (error) {
    toast.error(error)
  }
};
export const search = async (searchString) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=41643a7c482e6b1bb470796857111a25&language=en-US&query=${searchString}`
    );
    const res = response.data.results;
    return res;
  } catch (error) {
    toast.error(error)
  }
};