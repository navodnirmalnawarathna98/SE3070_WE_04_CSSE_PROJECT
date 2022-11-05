import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AllPassengers from "./Pages/AllPassengers";
import LoginPage from "./Pages/Login-Page/LoginPage";
import AddPassengers from "./Pages/AddPassengers";
import EditPassengers from "./Pages/EditPassengers";

import AllIspectors from "./Pages/AllInspectors";
import AddInspectors from "./Pages/AddInspectors";
import EditInspectors from "./Pages/EditInspectors";

import AddCard from "./Pages/AddCard";

function App() {
  return (
    <Router>
      <Routes>

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

        {/* Add Card Page */}
        <Route path='/addcard' element={<AddCard />} />

      </Routes>
    </Router>
  );
}

export default App;
