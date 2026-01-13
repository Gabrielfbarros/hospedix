import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/userContext.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Account from "./pages/account.jsx";
import Header from "./components/header";
import Place from "./pages/place.jsx";

axios.defaults.baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:4000/api"
    : "https://hospedix.onrender.com/api";
axios.defaults.withCredentials = true;

console.log(import.meta.env);

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account/:subpage/:action?/:id?" element={<Account />} />
          <Route path="/place/:id" element={<Place />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
