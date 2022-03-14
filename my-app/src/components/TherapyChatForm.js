import React, {useState} from 'react';

export default function TherapyChatForm() {
    const [formData, setFormData] = useState({
       gender: "",
       age: "",
       relationship: "",
       beenintherapy: "",
       considertherapy: "",
       session: "",
       physicalhealth: "",
       eatinghabits: "",
       mood: "",
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit() {
        console.log(`Form State: ${JSON.stringify(formData)}`);
        alert(`Form State: ${JSON.stringify(formData)}`);
    }

    function handleClear() {
        setFormData({
            gender: "",
            age: "",
            relationship: "",
            beenintherapy: "",
            considertherapy: "",
            session: "",
            physicalhealth: "",
            eatinghabits: "",
            mood: "",
        });
        console.log(formData);
    };  

    return (
        <div>
            
        </div>
    )
}