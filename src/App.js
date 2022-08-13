import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import CryptoContext, { CryptoProvider } from "./context/CryptoContext";
import AssetInfo from "./pages/AssetInfo";
import { useEffect, useReducer, useContext } from "react";
function App() {
  return (
    <div>
      <CryptoProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen ">
            <Navbar />
            <main className="container mx-auto px-3 pb-12 ">
              <Routes>
                <Route exact path="/" exact element={<Home />} />
                <Route exact path="/about" element={<About />} />

                <Route exact path="/asset/:id" element={<AssetInfo />} />
                <Route exact path="/not-found" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CryptoProvider>
    </div>
  );
}

export default App;
