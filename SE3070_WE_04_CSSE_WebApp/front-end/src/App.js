import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home-Page/HomePage";
import AllPassengers from "./Pages/AllPassengers";
import LoginPage from "./Pages/Login-Page/LoginPage";
import AddPassengers from "./Pages/AddPassengers";

function App() {
  return (
    <Router>
      <Routes>

        {/* Home Page */}
        <Route path='/homepage' element={<HomePage />} />

        {/* Login Page */}
        <Route path='/' element={<LoginPage />} />

        {/* All Passengers Page */}
        <Route path='/allpassengers' element={<AllPassengers />} />

        {/* Add Passengers Page */}
        <Route path='/addpassengers' element={<AddPassengers />} />

      </Routes>
    </Router>
  );
}

export default App;
