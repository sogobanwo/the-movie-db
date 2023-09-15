import React, { useEffect, useState } from "react";
import Sidebar from "../Components/DetailsPage/Sidebar";
import DetailsBody from "../Components/DetailsPage/DetailsBody";
import { useParams } from "react-router-dom";
import { eachMovie } from "../Services/MovieServices";
import { BallTriangle } from "react-loader-spinner";
import { toast } from "react-toastify";

const DetailsPage = () => {
  const [details, setDetails]= useState({})
  const [isFetching, setIsFetching] = useState(true);
  const param = useParams();

 

  useEffect(() => {
    const pageData = async () => {
      try {
        const eachDetail = await eachMovie(param.id);
        setIsFetching(false)
        console.log(eachDetail)
        setDetails(eachDetail)
      } catch (error) {
        toast.error(error)
      }
    };
    pageData();
  },[param.id]);

  if(isFetching){
  
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
      <Sidebar />
      <DetailsBody details={details} isFetching={isFetching} />
    </>
  );
};

export default DetailsPage;
