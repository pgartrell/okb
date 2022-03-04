import React from "react";
import DonateHero from "../components/DonateHero";
import DonateForm from "../components/DonateForm";
import DonationHelps from "../components/DonationHelps";

const DonatePage = () => {
  return (
    <div>
      <DonateHero />
      <DonateForm />
      <DonationHelps />
    </div>
  );
};

export default DonatePage;