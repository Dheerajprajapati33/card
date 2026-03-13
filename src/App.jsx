import CardForm from "./components/CreditForm";
import CreditCard from "./components/CreditCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
        <>
        {/* its use the HTML% library API for clean URL */}
        <BrowserRouter>
        {/* container component that encloses all individuals route definition */}
        <Routes>
          {/* mapping between the specific URL path and element */}
          <Route path='/' element={<CardForm/>}/>
          <Route path="/card" element={<CreditCard/>}/>
        </Routes>
        </BrowserRouter>
        </>
  );
}

export default App;