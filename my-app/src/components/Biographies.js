import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BioPics = () => {
    const [biographies, setBiographies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:1337/api/biographies?populate=*")
        .then((data) => data.json())
        .then((data) => {
            setBiographies(data.data);
        })
        .catch((error) => console.log(error));
    }, {});

    let imageurl = `http://localhost:1337/${setBiographies.data}/`

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
                            <img src={imageurl} />
                        </div>

                        </Link>
                </div>
            ))}
        </div>
    )
}

export default BioPics;