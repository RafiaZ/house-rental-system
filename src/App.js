import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import './App.css';
import DetailsPage from "./pages/DetailsPage";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/detailpage" element={<DetailsPage/>}></Route>
  
   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
