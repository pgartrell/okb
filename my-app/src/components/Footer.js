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
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/" target="_blank"><i className="social-btn fa fa-facebook fa-2x" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/" target="_blank"><i className="social-btn fa fa-twitter fa-2x" /></a>{' '}
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/" target="_blank"><i className="social-btn fa fa-instagram fa-2x" /></a>{' '}
                        <a className="btn btn-social-icon btn-linkedin" href="http://linkedin.com/" target="_blank"><i className="social-btn fa fa-linkedin fa-2x" /></a> 
                        <a className="btn btn-social-icon btn-envelope" href="#" target="_blank"><i className="social-btn fa fa-envelope fa-2x" /></a>
                        <p>Join Us in our effort to increase access to healthcare across Ghana</p>
                        <p className="text-muted">OKB is a 501c(3) Tax-Exempt Nonprofit</p>
                        <p className="text-muted">EIN: 85-2646352</p>
                        <hr/>
                    </Col>
                </Row>
                <Row>             
                    <Col md={6} className="menu-footer">
                        <h3>Menu</h3>
                        <ul className="list-unstyled">
                            <li><a className="menu-item-footer" href="#">Who We Are</a></li>
                            <li><a className="menu-item-footer" href="#">What We Do</a></li>
                            <li><a className="menu-item-footer" href="#">Our Impact</a></li>
                            <li><a className="menu-item-footer" href="#">Work With Us</a></li>
                            <li><a className="menu-item-footer" href="#">Donate</a></li>
                        </ul>
                    </Col>
                        <hr className="d-md-none"></hr>
                    <Col md={6}>
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
                            <Button className="btn-signup" variant="primary" type='submit'>Sign-up</Button>
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
                        <p>&copy; OKB Hope Foundation. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}