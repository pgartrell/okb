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

    let imageurl = `http://localhost:1337`


    return (
        <div>
            {biographies.map((biography) => (
                <div className="row">
                    
                        <div key={biography.id} className="col-6">
                        <img src={imageurl + biography.attributes.pics.data[0].attributes.url} />
                            {biography.attributes.name}
                        </div>

                        <div className="col-md-6">
                            {biography.attributes.bio}
                        </div>
                        
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