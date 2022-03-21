import React from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import { DOCTORS } from '../shared/doctors';

function RenderBio({doctor}) {
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

function FullBio(props) {
    if (props.doctor) {
        return (
            <div className="container">
                <div className="row">
                    <RenderBio doctor={props.doctor} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default FullBio;