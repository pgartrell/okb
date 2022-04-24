import React, {useLayoutEffect}  from "react";
import VAHeader from '../components/VAHeader'
import VAQuestions from '../components/VAQuestions'
import VAFAQ from '../components/VAFAQ'
import VANeedHelp from '../components/VANeedHelp'

const VolunteerApplicationsPage = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
        <VAHeader />
        <VAQuestions />
        <VAFAQ />
        <VANeedHelp />
    </div>
  )
}

export default VolunteerApplicationsPage