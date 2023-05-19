import React from "react";

function Article({title, date="January 1, 1970", preview}){
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}


export default Article;






// id: 2,
// title: "React Data Flow",
// date: "December 11, 2020",
// preview: "Passing props is never passé",
// minutes: 15,
