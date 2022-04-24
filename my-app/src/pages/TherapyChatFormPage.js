import React, {useLayoutEffect}  from "react";
import TherapyChatForm from '../components/TherapyChatForm'

const TherapyChatFormPage = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
        <TherapyChatForm />
        
    </div>
  )
}

export default TherapyChatFormPage