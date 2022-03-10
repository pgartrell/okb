import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


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

    return (
        <div>
            {biographies.map((biography) => (
                <div className="row">
                    <Link 
                      to={"/biographies/" + biography.id}
                      key = {biography.id}
                      style={{ textDecoration: "none" }}
                    >
                        <div key={biography.id} className="col-6">
                            {biography.attributes.name}
                        </div>

                        <div className="col-md-6">
                            {biography.attributes.bio}
                        </div>
                        </Link>
                </div>
            ))}
        </div>
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