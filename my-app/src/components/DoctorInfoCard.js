import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';


const BioList = () => {
    const [biographies, setBiographies] = useState([]);

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
            {biographies.map((biography) => (
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



// function RenderDoctorInfoCard({doctor}) {
//     return (
//         <div className="col-md-5 m-1">

//                 <Card>
//                     <CardImg top src={baseUrl + doctor.image} alt={doctor.name} />

//                     <CardBody>
//                         <CardText>{doctor.description}</CardText>
//                     </CardBody>
//                 </Card>
//         </div>
//     );
// }

// export default function DoctorInfoCard(props) {
//     if (props.campsite) {
//         return (
//             <div className="container">

//                 <div className="row">
//                     <RenderDoctorInfoCard doctor={props.doctor} />
 
//                 </div>
//             </div>
//         );
//     }
//     return <div />;
// }