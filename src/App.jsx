import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // <--- 1. Import it
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import BookTable from "./pages/BookTable";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router basename="/onni-pizza">
      <ScrollToTop />{" "}
      {/* <--- 2. Add it here, inside Router but outside Layout */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book-table" element={<BookTable />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
