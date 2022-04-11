
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route, Link
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
import TherapyChatFormPage from "./pages/TherapyChatFormPage";
import VolunteerApplicationsPage from "./pages/VolunteerApplicationsPage";
import StudentVolunteerPage from "./pages/StudentVolunteerPage";
import HealthVolunteerForm from "./components/HealthVolunteerForm";
import MoreFAQs from "./pages/MoreFAQs";
import Header from "./components/Header";
import Footer from './components/Footer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from './components/Breadcrumbs';



function App() {
  const [crumbs, setCrumbs] = useState([<Link to="/">Home</Link>, 'aboutPage', 'impactPage']);

  const selected = crumb => {
    console.log(crumb);
  }
  return (
    <div className="App">
      <Router>
        <Header />
        <Breadcrumb crumbs={ crumbs } selected={ selected }  />
          <Routes>
            <Route>
              <Route path="/" element={<LandingPage />} />
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
              <Route path="/TherapyChatFormPage" element={<TherapyChatFormPage />} />
              <Route path="/VolunteerApplicationsPage" element={<VolunteerApplicationsPage />} />

              <Route path="/MoreFAQs" element={<MoreFAQs />} />           

              <Route path="StudentVolunteerPage" element={<StudentVolunteerPage />} />
              <Route path="HealthVolunteerForm" element={<HealthVolunteerForm />} />
              <Route path="/MoreFAQs" element={<MoreFAQs />} />

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
