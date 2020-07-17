import React from 'react'

import BCCard from './BCCard'

import PlaceHolder from '../assets/images/pencil.jpg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class BCCarousel extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Event photographer',
                    subTitle: 'Subtitle',
                    imgSrc: PlaceHolder,
                    link: 'http://ryankere.asdgrp.net',
                },
                {
                    id: 1,
                    title: 'Ottawa Roor Soccer',
                    subTitle: 'Coursework',
                    imgSrc: PlaceHolder,
                    link: 'http://ottroots.asdgrp.net',
                },
                {
                    id: 2,
                    title: 'Voyage en Europe - Eté 2017',
                    subTitle: 'Subtitle',
                    imgSrc: PlaceHolder,
                    link: 'http://eurotrip2017.asdgrp.net/',
                },
                {
                    id: 3,
                    title: 'About Me',
                    subTitle: 'Subtitle',
                    imgSrc: PlaceHolder,
                    link: 'http://abel.asdgrp.net',
                },
                {
                    id: 4,
                    title: 'Weather',
                    subTitle: 'Subtitle',
                    imgSrc: PlaceHolder,
                    link: 'http://weather.asdgrp.net',
                },
            ]
        }
    }

    makeItems = (items) => {
        return items.map(item => {
            return <BCCard item={item} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default BCCarousel;