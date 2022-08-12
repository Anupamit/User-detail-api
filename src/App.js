import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetData from "./Components/GetData";
import Home from "./Components/Home";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/getdata" element={<GetData/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
