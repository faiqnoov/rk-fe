import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import CreateProduct from "./CreateProduct";

function App() {
  return (
    <>
      <Router>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">AddProduct</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
