import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Todos from "./pages/Todos";
import PageTransition from "./components/PageTransition";
import Loader from "./components/Loader";
import Footer from "./components/Footer"; // Import Footer

const AnimatedRoutes = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer;

    if (navigationType !== "POP") {   // Only show loader for PUSH or REPLACE
      setLoading(true);
      timer = setTimeout(() => setLoading(false), 1000); // Set timer
    }

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, [location, navigationType]);

  return (
    <>
      {loading && <Loader />}
      <AnimatePresence mode="wait">
        {!loading && (   // Prevent page transition from running while loading
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
            <Route path="/signup" element={<PageTransition><Signup /></PageTransition>} />
            <Route path="/todos" element={<PageTransition><Todos /></PageTransition>} />
          </Routes>
        )}
      </AnimatePresence>
    </>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
      <Footer /> {/* Add Footer component here */}
    </Router>
  );
}

export default App;
