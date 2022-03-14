
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
import TherapistsPage from "./pages/TherapistsPage.js"
import AppointmentPage from "./pages/AppointmentPage";
import AboutPage from "./pages/AboutPage";
import DonatePage from "./pages/DonatePage";
import ImpactPage from "./pages/ImpactPage";
import WWDPage from "./pages/WWDPage"
import BioList from "./components/DoctorInfoCard";
import TherapistBioList from "./components/TherapistInfoCard";
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
            <Route exact path="/doctorsPage" element={<DoctorsPage />} />
            <Route path="/therapistsPage" element={<TherapistsPage />} />
            <Route path="/appointmentPage" element={<AppointmentPage />} />
            <Route path="/aboutPage" element={<AboutPage />} />
            <Route path="/donatePage" element={<DonatePage />} />
            <Route path="/impactPage" element={<ImpactPage />} />
            <Route path="/WWDPage" element={<WWDPage />} />
            {/* <Route path="/doctorsPage/:id" element={<DoctorInfoCard />}>
              </Route> */}
            <Route path="/biographies/:id" element={<BioList />} />
            <Route path="/therapist-biographies/:id" element={<TherapistBioList />} />
              
          </Route>
        </Routes>
      </Router>
      <Footer />


    </div>
  );
}

export default App;
