import React from 'react';
import { Container, Row, Col, FormGroup, Form, FormControl, Button } from "react-bootstrap";




export default function Footer() {
    const [formData, setFormData] = React.useState({
        email: '',
        firstName: '',
        lastName: ''
    });


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

    return (
        <footer className="site-footer">
            <Container>
                <Row>             
                    <Col>
                        <h5>Menu</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Who We Are</a></li>
                            <li><a href="#">What We Do</a></li>
                            <li><a href="#">Our Impact</a></li>
                            <li><a href="#">Work With Us</a></li>
                            <li><a href="#">Donate</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/" target="_blank"><i className="social-btn fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/" target="_blank"><i className="social-btn fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/" target="_blank"><i className="social-btn fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-linkedin" href="http://linkedin.com/" target="_blank"><i className="social-btn fa fa-linkedin" /></a> 
                        <a className="btn btn-social-icon btn-envelope" href="#" target="_blank"><i className="social-btn fa fa-envelope" /></a>
                        <p>Join Us in our effort to increase access to healthcare across Ghana</p>
                        <p className="text-muted">OKB is a 501c(3) Tax-Exempt Nonprofit</p>
                        <p className="text-muted">EIN: 85-2646352</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> campsites@nucamp.co</a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <h3>Follow Our Progress</h3>
                            <FormGroup controlId="email">
                                <FormControl
                                    model='.email'
                                    id='email'
                                    name='email'
                                    type="email"
                                    placeholder="you@yourEmail.com"
                                    onChange={handleChange}
                                    value={formData.email}
                                />
                            </FormGroup>
                            <FormGroup constrolId="firstName">
                                <FormControl
                                     model='.firstName'
                                     id='firstName'
                                     name='firstName'
                                     type="text"
                                     placeholder="First Name"
                                     onChange={handleChange}
                                     value={formData.firstName}
                                />
                            </FormGroup>
                            <FormGroup constrolId="lastName">
                                <FormControl
                                     model='.lastName'
                                     id='lastName'
                                     name='lastName'
                                     type="text"
                                     placeholder="Last Name"
                                     onChange={handleChange}
                                     value={formData.lastName}
                                />
                            </FormGroup>
                            <Button variant="primary" type='submit'>Sign-up</Button>
                        </Form>
                        <p>Sign-up for our newsletter to learn more about our upcoming projects and how you can get involved!</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Partnerships</h3>
                        <p className="text-muted">Bethel Assemblies of God</p>
                        <p className="text-muted">Cornell Tradition</p>
                        <p className="text-muted">Engaged Cornell</p>
                        <p className="text-muted">Institute of african Development, Cornell University</p>
                        <p className="text-muted">Expanding Boundaries International</p>
                        <p className="text-muted">Komfo Anokye Teaching Hospital</p>
                        <p className="text-muted">Rural Smile Foundation</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>&copy; OKB Hope Foundation. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}