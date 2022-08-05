import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { CryptoProvider } from "./context/CryptoContext";
import AssetInfo from "./pages/AssetInfo";
function App() {
  return (
    <CryptoProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen ">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/asset/:id" element={<AssetInfo />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CryptoProvider>
  );
}

export default App;
