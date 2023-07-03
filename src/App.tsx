import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FilterContextProvider } from "./context/FilterContext";
import { AppContextProvider } from "./context/AppContext";
import { CartContextOldProvider } from "./context/CartContextOld";
import { CartContextProvider } from "./context/CartContext";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/auth/Protected";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {


  return (
    <div>
      <AuthContextProvider>
        <AppContextProvider>
          <FilterContextProvider>
            <CartContextOldProvider>
              <CartContextProvider>
                <Router>
                  <Routes>
                    <Route path="/" element={<Protected children={<Home />} />} />
                    <Route path="/orders" element={<Protected children={<Orders />} />} />
                    <Route path="/auth/login" element={<Login />} />
                  </Routes>
                </Router>
              </CartContextProvider>
            </CartContextOldProvider>
          </FilterContextProvider>
        </AppContextProvider>
      </AuthContextProvider>
    </div>
  )
}

export default App;