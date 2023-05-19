import React from "react";

function About({image='https://via.placeholder.com/215', about}){
    return(
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}





export default About;




//  image: logo,
//   about: "A blog about learning React",

// <img src={`${image}`} alt="blog logo" />
// <img src={image} alt="blog logo" />
