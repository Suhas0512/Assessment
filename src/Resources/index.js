import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { useNavigate } from "react-router-dom";
function Resources() {
  const [resources, setResources] = useState([]);
  useEffect(() => {
    axios
      .get("https://engineering-task.elancoapps.com/api/resources")
      .then((res) => setResources(res.data));
  }, []);
  const navigate = useNavigate();
  const handleRedirect = (title) => {
    navigate(`/resources/${title}`);
  };
  const handleList = () => {
    return resources.map((ele) => {
      return (
        <div className="list">
          <div onClick={() => handleRedirect(ele)} className="list-class">
            {ele}
          </div>
        </div>
      );
    });
  };
  return <div className="main-div">{handleList()}</div>;
}

export default Resources;
