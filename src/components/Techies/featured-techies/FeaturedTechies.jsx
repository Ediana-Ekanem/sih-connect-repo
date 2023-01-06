import React, { useState, useEffect } from "react";

//importing default
import useFetch from "../../../hooks/useFetch";

//importing supporting components
import LoadingSpinner from "../../UI/LoadingSpinner";
import DisplayPhoto from "../DisplayPhoto";

const url = "https://starthubconnect.adaptable.app/user/top-members";

const FeaturedTechies = () => {
  //consuming custom hook
  const { data, isPending, error } = useFetch(url);

  return (
    <div className="bg-[rgb(16,50,140)] text-center py-[3rem] h-full]">
      <h1 className="text-white text-[4vmin] font-[400] mb-[1rem]">
        Featured techies
      </h1>
      {!data && !isPending && error && <h1>Could not fetch data</h1>}
      {isPending && !error && !data && <LoadingSpinner />}
      {data && !isPending && !error && (
        <div className="grid grid-cols-6 phone:grid-cols-3 lg2:grid-cols-6">
          {data.items.map((techie) => (
            <div
              className=" m-[.7em] flex flex-col items-center justify-center "
              key={techie.id}
            >
              <DisplayPhoto img={techie.profile_image} alt={"Display Photo"} />
              <h1 className="text-white font-[500] phone:text-[2vmin]  lg2:text-[2.5vmin]">
                {techie.firstname + " " + techie.lastname}
              </h1>
              <p className="text-[#6474A2] phone:text-[1.8vmin] lg2:text-[2.2vmin]">
                {techie.skill ? techie.skill : "No skill "}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedTechies;
