import React from 'react'

import Card from './Card'

import Image1 from '../assets/images/img1.png'
import UT from '../assets/images/carletonU.jpg'
import Image3 from '../assets/images/img3.jpg'
import Image4 from '../assets/images/img4.jpg'
import Image5 from '../assets/images/img5.jpg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class HPCarousel extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Bootcamp',
                    subTitle: 'Coursework',
                    imgSrc: UT,
                    link: '/bootcamp',
                    selected: false
                },
                {
                    id: 1,
                    title: 'title',
                    subTitle: 'Subtitle',
                    imgSrc: Image1,
                    link: 'https://google.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'title',
                    subTitle: 'Subtitle',
                    imgSrc: Image3,
                    link: 'https://google.com',
                    selected: false
                },
                {
                    id: 3,
                    title: 'title',
                    subTitle: 'Subtitle',
                    imgSrc: Image4,
                    link: 'https://google.com',
                    selected: false
                },
                {
                    id: 4,
                    title: 'title',
                    subTitle: 'Subtitle',
                    imgSrc: Image5,
                    link: 'https://google.com',
                    selected: false
                },
            ]
        }
    }



    //1000px wide 1600px tall


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
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

export default HPCarousel;