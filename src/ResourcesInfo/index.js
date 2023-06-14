import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { useLocation } from "react-router-dom";
function ResourcesInfo() {
  const [resources, setResources] = useState([]);
  const location = useLocation();
  useEffect(() => {
    axios
      .get(
        `https://engineering-task.elancoapps.com/api/resources/${
          location.pathname.split("/")[2]
        }`
      )
      .then((res) => setResources(res.data));
  }, []);

  const handleList = () => {
    return resources.map((ele) => {
      return (
        <>
          {" "}
          <div className="div">
            <li>Consumed Qantity {ele.ConsumedQuantity}</li>
            <li>Cost {ele.Cost}</li>
            <li>Date {ele.Date}</li>
            <li>Environment: {ele.Tags.environment}</li>
          </div>
          <br />
        </>
      );
    });
  };

  return <div className="main-div">{handleList()}</div>;
}

export default ResourcesInfo;
