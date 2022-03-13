import React, {useEffect, useState } from 'react';
import { CaptionStyle, DoctorImage, DoctorImageContainer, SubCaptionStyle } from '../styles/OurDoctorStyles.styles';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TherapistTopBioPics = () => {
    const [tbiographies, setTBiographies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:1337/api/therapist-biographies?populate=*")
        .then((data) => data.json())
        .then((data) => {
            setTBiographies(data.data);
        })
        .catch((error) => console.log(error));
    }, {});


    let imageurl = `http://localhost:1337`

    return (
        <Row>
        {tbiographies.filter(biography => biography.attributes.topfeature==true).map((biography) => (
                <Col xs={4} sm={3} lg={2}>
                <Link 
                  to={"/therapist-biographies/" + biography.id}
                  key = {biography.id}
                  style={{ textDecoration: "none" }}
                >
                    <DoctorImageContainer  key={biography.id} className="m-3">
                        <DoctorImage  src={imageurl + biography.attributes.pics.data[0].attributes.formats.thumbnail.url} alt={biography.attributes.name} />
                        <CaptionStyle>
                        {biography.attributes.name}
                        <SubCaptionStyle>{biography.attributes.credential}</SubCaptionStyle>
                    </CaptionStyle>
                    </DoctorImageContainer>

                    </Link>
                    </Col>
        ))}
    </Row>
    )
}

export default TherapistTopBioPics;