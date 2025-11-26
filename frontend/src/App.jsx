import Header from "./components/header.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/login" element={<Login />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
