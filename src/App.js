import logo from "./logo.svg";
import Test from "./Resources/index";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Resources from "./Resources/index";
import Applications from "./Applications/index";
import ResourcesInfo from "./ResourcesInfo/index";
import ApplicationsInfo from "./ApplicationsInfo/index";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/resources" element={<Resources />}></Route>
      <Route path="/applications" element={<Applications />}></Route>
      <Route path="/resources/:title" element={<ResourcesInfo />}></Route>
      <Route path="/applications/:title" element={<ApplicationsInfo />}></Route>
    </Routes>
  );
}

export default App;
