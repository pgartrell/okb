import React from 'react';
import { 
    Container, 
    Row, 
    Col, 
    FormGroup, 
    Form, 
    FormControl, 
    Button
} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
                    <Col xs={12} lg={6}>
                    <h3 className="mb-3">Follow Us</h3>
                        <a className="social-btn" href="http://www.facebook.com/" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} size="2x"/>
                        </a>
                        <a className="social-btn" href="http://twitter.com/" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} size="2x"/>
                        </a>
                        <a className="social-btn" href="http://instagram.com/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} size="2x"/>
                        </a>
                        <a className="social-btn" href="http://linkedin.com/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                        </a> 
                        <a className="social-btn" href="mailto:you@yourEmail.com" target="_blank">
                            <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                        </a>
                        <p className="mt-3">Join us in our effort to increase access to healthcare across Ghana!</p>
                        <p className="mt-3 text-muted">OKB is a 501c(3) Tax-Exempt Nonprofit</p>
                        <p className="text-muted">EIN: 85-2646352</p>
                        <hr className="d-lg-none"/>
                    </Col>            
                    <Col xs={12} lg={6}>
                        <Form onSubmit={handleSubmit}>
                            <h3>Follow Our Progress</h3>
                            <FormGroup controlId="email" className="form-footer">
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
                            <FormGroup constrolId="firstName" className="form-footer">
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
                            <FormGroup constrolId="lastName" className="form-footer">
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
                            <button className="btn-signup" type='submit'>Sign-up</button>
                        </Form>
                        <p>Sign-up for our newsletter to learn more about our upcoming projects and how you can get involved!</p>
                    </Col>
                        <hr/>
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
                        <p className="copy-footer">&copy; OKB Hope Foundation. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}