import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardImgOverlay, Breadcrumb, BreadcrumbItem,
    Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';

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
                    <RenderCampsite doctor={props.doctor} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default FullBio;