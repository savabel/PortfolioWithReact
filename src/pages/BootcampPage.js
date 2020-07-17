import React from 'react'

import Banner from '../components/Banner'

import BCCarousel from '../components/BCCarousel'


function BootcampPage(props) {
    return(
        <div>
            <Banner title={props.title} subTitle={props.subTitle} text={props.text} />
            <BCCarousel />
        </div>
    )
}

export default BootcampPage;