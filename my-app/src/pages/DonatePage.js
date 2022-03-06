import React from "react";
import DonateHero from "../components/DonateHero";
import DonateForm from "../components/DonateForm";
import DonationHelps from "../components/DonationHelps";
import NeedYourHelp from "../components/NeedYourHelp";

const DonatePage = () => {
  return (
    <div>
      <DonateHero />
      <DonateForm />
      <DonationHelps />
      <NeedYourHelp />
    </div>
  );
};

export default DonatePage;