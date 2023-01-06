import React from "react";

//importing components
import DisplayPhoto from "./DisplayPhoto";

const TechiesCard = ({
  profile_image,
  firstname,
  lastname,
  skills,
  experience_year_count,
}) => {
  return (
    <div className="flex flex-col shadow-md justify-center items-center text-center p-[1em] bg-white w-[220px] h-[306px]">
      <DisplayPhoto
        img={profile_image}
        alt={"Display Photo"}
        currentStatus={true}
      />

      <div className=" flex flex-col justify-center items-center text-center">
        <p className=" text-[20px] font-[700] m-0 ">
          {`${firstname} ${lastname}`}
        </p>
        <p className="text-[17px] font-[500] text-[#6B6B6B] m-0  ">
          {skills ? skills : "Trainee"}
        </p>

        <p className="font-[500] text-[17px] text-[#6B6B6B] mt-[.5em]">
          {experience_year_count ? experience_year_count : "<1 year(s)"}
        </p>
      </div>
    </div>
  );
};

export default TechiesCard;
