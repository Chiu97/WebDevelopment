import React from 'react';

const Card = ({id,name,email}) => {
    return (
        //dib:display: inline-block br:border pd:padding ma:margin grow:animation
        <div class='tc bg-light-green dib br3 pd3 ma2 grow'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots' />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;