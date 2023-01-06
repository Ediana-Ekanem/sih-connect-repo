import React, { Fragment } from "react";

//importing from react-router-dom
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

//importing components
import Button from "../UI/Button";
import SIHConnect from "../../assets/starthubconnect.png";

const Header = () => {
  return (
    <main className="lg2:grid lg2:grid-cols-[1fr,1fr] flex ">
      <section className="flex flex-col items-start justify-center">
        <div>
          <h1 className="text-5.5xl text-baseBlue font-medium leading-12">
            <b>Connect</b> with <b>techies</b> from all <b>niche</b>
          </h1>
          <p className="font-medium max-w-xl text-xlr text-primary pt-8 pb-10  leading-8 ">
            Collaborate with techies on a project and get things done as a team
            with techies in start innovation hub
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/register">
            <Button type="button">
              Join
              <BsArrowRightShort />
            </Button>
          </Link>

          <Link to="/all-techies">
            <Button
              type="button"
              border="2px solid #10328c"
              backgroundColor="#ffffff"
              color="#10328c"
              hoverColor="#ffffff"
            >
              View Members
              <BsArrowRightShort />
            </Button>
          </Link>
        </div>
      </section>

      <section className="flex justify-end">
        <img src={SIHConnect} className="max-w-2.5xl rounded-full px-2 py-2 " />
      </section>
    </main>
  );
};

export default Header;
