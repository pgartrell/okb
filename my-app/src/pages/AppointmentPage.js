import React, {useLayoutEffect}  from "react";
import MobileAppointmentRequest from '../components/MobileAppointmentRequest'

const AppointmentPage = () => {
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <div>
        <MobileAppointmentRequest />  
    </div>
  )
}

export default AppointmentPage;