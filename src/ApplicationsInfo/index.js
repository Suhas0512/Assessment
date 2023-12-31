import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { useLocation } from "react-router-dom";
function ApplicationsInfo() {
  const [apps, setApps] = useState([]);
  const location = useLocation();
  useEffect(() => {
    axios
      .get(
        `https://engineering-task.elancoapps.com/api/applications/${
          location.pathname.split("/")[2]
        }`
      )
      .then((res) => setApps(res.data));
  }, []);

  const handleList = () => {
    return apps.map((ele) => {
      return (
        <>
          {" "}
          <div className="div">
            <li>Consumed Qantity: {ele.ConsumedQuantity}</li>
            <li>Cost: {ele.Cost}</li>
            <li>Date: {ele.Date}</li>
            <li>Environment: {ele.Tags.environment}</li>
            <li>Location : {ele.ResourceLocation}</li>
          </div>
          <br />
        </>
      );
    });
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Here is more information about applications
      </h1>{" "}
      <div className="main-div">{handleList()}</div>
    </>
  );
}

export default ApplicationsInfo;
