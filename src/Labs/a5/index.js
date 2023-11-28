import React from "react";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {

  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/a5`;
  console.log(`API BASE LAB: ${API_BASE}`);

    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href={`${URL}/welcome`}
             className="list-group-item">
            Welcome
          </a>
          <EncodingParametersInURLs/>
          <WorkingWithObjects/>
          <WorkingWithArrays/>
        </div>
      </div>
    );
  }

  export default Assignment5;