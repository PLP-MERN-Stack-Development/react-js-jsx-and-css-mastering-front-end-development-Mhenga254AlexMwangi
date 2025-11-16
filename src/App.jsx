import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Tasks from "./pages/Tasks";
import Components from "./pages/Components";
import ApiDemo from "./pages/ApiDemo";
import Layout from "./components/Layout";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/components" element={<Components />} />
            <Route path="/api-demo" element={<ApiDemo />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
