import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home-Page/HomePage";

import LoginPage from "./Pages/Login-Page/LoginPage";

function App() {
  return (
    <Router>
      <Routes>

        {/* Home Page */}
        <Route path='/' element={<HomePage />} />

        {/* Login Page */}
        <Route path='/login' element={<LoginPage />} />

      </Routes>
    </Router>
  );
}

export default App;
