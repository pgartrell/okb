import React, {useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';


const BioList = () => {
    const [biographies, setBiographies] = useState([]);

let everest = useParams()
console.log(everest.id);

    useEffect(() => {
        fetch("http://localhost:1337/api/biographies?populate=*")
        .then((data) => data.json())
        .then((data) => {
            setBiographies(data.data);
        })
        .catch((error) => console.log(error));
    }, {});

    let imageurl = `http://localhost:1337`

    return (
        <Container>
            <Row style={{textAlign: 'left'}}>
                <Link to='/doctorsPage' style={{textDecoration: 'none'}}><button className="btn-okb-secondary"><FontAwesomeIcon icon={faAngleLeft} /> Back</button></Link>
            </Row>
            {biographies.filter(biography => biography.id==everest.id).map((biography) => (
                <Row>
                    <Col key={biography.id}>
                        <img className="dr-bio-pic" src={imageurl + biography.attributes.pics.data[0].attributes.url} />
                    </Col>
                    <Col className="dr-bio-info">
                        <h1>{biography.attributes.name}</h1>
                        <h4>{biography.attributes.credential}</h4>
                        <br />
                           <p>{biography.attributes.bio}</p>
                        <br />
                        <h3>Specialties</h3>
                        
                        {biography.attributes.specialty.map(specialty =>(
                            <ul className="space_list">
                            <li className="nomarge">{specialty.singlecredential}</li>
                            </ul>
                            ))}
                        <br />
                        <h3>Experiences</h3>
                        {biography.attributes.experience.map(experience =>(
                            <ul className="space_list">
                            <li className="nomarge">{experience.singleexperience}</li>
                            </ul>
                            ))}
                    </Col>
                </Row>
            ))}
        </Container>
    )
}

export default BioList;