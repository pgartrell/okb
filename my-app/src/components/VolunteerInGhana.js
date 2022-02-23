import React from "react";
import { Card, CardGroup } from "react-bootstrap";


export default function VolunteerInGhana() {
    return (
        <div className="m-3">
            <h1 className="volunteer-title">Volunteer in Ghana</h1>
            <CardGroup>
                <Card className="m-5 volunteer-card">
                    <Card.Img variant="top" src="./assets/images/EducateAboutHealthPic.jpg" />
                    <Card.Title className="m-3  volunteer-card-title">
                        Educate About Health
                    </Card.Title>
                    <Card.Text className="m-1 volunteer-card-text">
                        We believe that "knowledge is power" therefore we ensure that every project that we embard on has an educational component to it.
                    </Card.Text>
                </Card>
                <Card className="m-5 volunteer-card">
                    <Card.Img variant="top" src="./assets/images/ScreenToSaveLivesPic.jpg" />
                    <Card.Title className="m-3 volunteer-card-title">
                        Screen to Save Lives
                    </Card.Title>
                    <Card.Text className="m-1 volunteer-card-text">
                        Students and Healthcare Professionals provide life-saving services by conducting health assessments and screenings.
                    </Card.Text>
                </Card>
                <Card className="m-5 volunteer-card">
                    <Card.Img variant="top" src="./assets/images/ExperienceGhanaPic.jpeg" />
                    <Card.Title className="m-3 volunteer-card-title">
                        Experience Ghana
                    </Card.Title>
                    <Card.Text className="m-1 volunteer-card-text">
                        Along with health services, we bring people to explore the vibrant culture of Ghana.
                    </Card.Text>
                </Card>
            </CardGroup>
        </div>
    )
}