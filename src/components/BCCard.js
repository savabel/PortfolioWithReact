import React from 'react';

import CardInfo from '../components/CardInfo';


function BCCard(props) {

    return(
        <div className="d-inline-block l-card" >
            <img className="bc-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            <CardInfo className="wraptext" title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> 
        </div>
    );

}

export default BCCard;