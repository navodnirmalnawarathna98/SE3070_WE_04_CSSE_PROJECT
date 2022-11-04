import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home-Page/HomePage";
import AllPassengers from "./Pages/AllPassengers";
import LoginPage from "./Pages/Login-Page/LoginPage";
import AddPassengers from "./Pages/AddPassengers";
import EditPassengers from "./Pages/EditPassengers";

import AllIspectors from "./Pages/AllInspectors";
import AddInspectors from "./Pages/AddInspectors";
import EditInspectors from "./Pages/EditInspectors";

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

        {/* Edit Passengers Page */}
        <Route path="/editpassengers/:id" element={<EditPassengers />} />

        {/* All Inspectors Page */}
        <Route path='/allinspectors' element={<AllIspectors />} />

        {/* Add Inspectors Page */}
        <Route path='/addinspectors' element={<AddInspectors />} />

        {/* Edit Inspectors Page */}
        <Route path="/editinspectors/:id" element={<EditInspectors />} />

      </Routes>
    </Router>
  );
}

export default App;
