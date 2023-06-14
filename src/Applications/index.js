import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { useNavigate } from "react-router-dom";
function Applications() {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();
  const handleRedirect = (title) => {
    navigate(`/applications/${title}`);
  };
  useEffect(() => {
    axios
      .get("https://engineering-task.elancoapps.com/api/applications")
      .then((res) => setApplications(res.data));
  }, []);

  const handleList = () => {
    return applications.map((ele) => {
      return (
        <li onClick={() => handleRedirect(ele)} className="list-class">
          {ele}
        </li>
      );
    });
  };
  return (
    <div className="main-div">
      <p>
        Here is the list of applications, click on them for further information
      </p>
      {handleList()}
    </div>
  );
}

export default Applications;
