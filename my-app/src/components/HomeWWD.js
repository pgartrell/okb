import React from "react";
import { Link } from "react-router-dom";
import testImage from "../images/workWithUsBanner.jpg";

const HomeWWD = () => {
  return (
    <div className="container d-flex justify-content-center py-5 wwdContainer">
      <div className="wwdImage col-6">
        <img src={testImage} />
      </div>
      <div className="container wwdText align-self-center">
        <h1 className="wwdTitle">What We Do</h1>
        <p className="wwdParagraph">
          We provide transformative healthcare services and life-saving
          solutions to the underserved Ghanaians.
        </p>
        <Link to="#">
          <button className="btn-okb-primary">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeWWD;
