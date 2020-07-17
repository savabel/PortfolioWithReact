import React from 'react'

import Banner from '../components/Banner'
import HPCarousel from '../components/HPCarousel'

function HomePage(props) {
    return(
        <div>
            <Banner title={props.title} subTitle={props.subTitle} text={props.text} />
            <HPCarousel />
        </div>
    )
}

export default HomePage;