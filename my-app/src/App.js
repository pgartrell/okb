
import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MobileClinicPage from "./pages/MobileClinicPage";
import OnlineTherapyPage from "./pages/OnlineTherapyPage";
import ResourcesPage from "./pages/ResourcesPage";
import WorkWithUsPage from "./pages/WorkWithUsPage";
import DoctorsPage from "./pages/DoctorsPage";
import Header from "./components/Header";
import Footer from './components/Footer'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route>
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="/mobileClinicPage" element={<MobileClinicPage />} />
            <Route path="/onlineTherapyPage" element={<OnlineTherapyPage />} />
            <Route path="/resourcesPage" element={<ResourcesPage />} />
            <Route path="/workWithUsPage" element={<WorkWithUsPage />} />
            <Route path="/doctorsPage" element={<DoctorsPage />} />
          </Route>
        </Routes>
      </Router>
      <Footer />


    </div>
  );
}

export default App;
