import "./App.css";
import { useNavigate } from "react-router-dom";
function Homepage() {
  const navigate = useNavigate();
  const handleResource = () => {
    navigate("/resources");
  };
  const handleApplication = () => {
    navigate("/applications");
  };
  return (
    <div className="App">
      <h1>React Assessment</h1>
      <div className="mainContainer">
        Welcome to Elanco Elanco is a global leader in animal health dedicated
        to innovating and delivering products and services to prevent and treat
        disease in farm animals and pets, creating value for farmers, pet
        owners, veterinarians, stakeholders, and society as a whole.
      </div>
      <br />
      <button className="buttonContainer" onClick={handleResource}>
        Click Here for Resources
      </button>
      <br />
      <br />
      <button className="buttonContainer" onClick={handleApplication}>
        Click Here for Applications
      </button>
    </div>
  );
}

export default Homepage;
