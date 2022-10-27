import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home-Page/HomePage";

function App() {
  return (
    <Router>
      <Routes>

        {/* Home Page */}
        <Route path='/' element={<HomePage />} />

      </Routes>
    </Router>
  );
}

export default App;
