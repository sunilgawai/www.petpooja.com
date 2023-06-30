import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FilterContextProvider } from "./context/FilterContext";
import { AppContextProvider } from "./context/AppContext";
import { CartContextProvider } from "./context/CartContext";
import Header from "./components/header/Header";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <AppContextProvider>
        <FilterContextProvider>
          <CartContextProvider>
            <Router>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Router>
          </CartContextProvider>
        </FilterContextProvider>
      </AppContextProvider>
    </div>
  )
}

export default App;