import React from "react";

const card = ({id, name, email}) => {
return(
    <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shawdo-5'>
        <img alt="robo" src={`https://robohash.org/${id}? 200×200 `} />
        <div>
        <h1>{name}</h1>
        <p>{email}</p>
        </div>
    </div>
);
};

export default card;