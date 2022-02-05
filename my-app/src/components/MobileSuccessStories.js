import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import { QUOTES } from '../shared/quotes';

export default function MobileSuccessStories() {
    const [quotes] = React.useState(QUOTES);

    const RenderQuotes = quotes.map(quote => {
        return (
            <Carousel.Item interval={5000} className='carousel-item'>
                    <Carousel.Caption className='text-dark carousel-caption'>
                        <h2>"{quote.quote}"</h2>
                    </Carousel.Caption>
            </Carousel.Item>
        );
    });
    return (
        <Container style={{padding: '1em'}} className='bg-light' fluid>
            <Carousel controls={false} indicators={false}>
                {RenderQuotes}
            </Carousel>
        </Container>
    );
};