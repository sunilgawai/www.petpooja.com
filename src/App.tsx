import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import Header from "./components/Header";
import Home from "./Home";
import { FilterContextProvider } from "./context/FilterContext";

const App = () => {
  return (
    <div>
      <AppContextProvider>
        <FilterContextProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </FilterContextProvider>
      </AppContextProvider>
    </div>
  )
}

export default App;