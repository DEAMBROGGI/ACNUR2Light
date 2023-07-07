
import LightApp from "./component/LightApp";
import NavBar from "./component/NavBar";
import Cities from "./component/cities/Cities";
import AboutUs from "./component/AboutUs";
import { Routes, Route } from "react-router-dom";

import './styles/App.css';

function App() {


  return (
    <div className='body'>

      <NavBar />
      <Routes>
        <Route path="*" element={<LightApp />}></Route>
        <Route path="/Home" element={<LightApp />}>  </Route>
        <Route path="/Cities" element={<Cities />}></Route>
        <Route path="/AboutUs" element={<AboutUs/>}></Route>
      </Routes>

    </div>
  )
}

export default App;
