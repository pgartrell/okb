import React, {useLayoutEffect}  from "react";
import StudentVolunteerForm from '../components/StudentVolunteer';

export default function StudentVolunteerPage() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

    return (
        <StudentVolunteerForm />
    );
};