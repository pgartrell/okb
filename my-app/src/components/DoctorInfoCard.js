import React from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

function RenderDoctorInfoCard({doctor}) {
    return (
        <div className="col-md-5 m-1">

                <Card>
                    <CardImg top src={baseUrl + doctor.image} alt={doctor.name} />

                    <CardBody>
                        <CardText>{doctor.description}</CardText>
                    </CardBody>
                </Card>
        </div>
    );
}

export default function DoctorInfoCard(props) {
    if (props.campsite) {
        return (
            <div className="container">

                <div className="row">
                    <RenderDoctorInfoCard doctor={props.doctor} />
 
                </div>
            </div>
        );
    }
    return <div />;
}