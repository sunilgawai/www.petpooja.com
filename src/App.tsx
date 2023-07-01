import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FilterContextProvider } from "./context/FilterContext";
import { AppContextProvider } from "./context/AppContext";
import { CartContextProvider } from "./context/CartContextOld";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";

const App = () => {


  return (
    <div>
      <AuthContextProvider>
        <AppContextProvider>
          <FilterContextProvider>
            <CartContextProvider>
              <Router>
                <Routes>
                  <Route path="/" element={<Protected children={<Home/>} />} />
                  <Route path="/orders" element={<Protected children={<Home/>} />} />
                  <Route path="/auth/login" element={<Login />} />
                </Routes>
              </Router>
            </CartContextProvider>
          </FilterContextProvider>
        </AppContextProvider>
      </AuthContextProvider>
    </div>
  )
}

export default App;