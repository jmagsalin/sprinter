import React, {Component} from 'react';
import {Carousel, Card, Container} from 'react-bootstrap';

class Homepage extends Component {
    render() {
        return(
            <React.Fragment>
            <div className = "carousel">
            <Carousel>
            <Carousel.Item>
            <img
                className="d-block w-100"
                width={900} height={670} alt="900x500"
                src="https://elegancetransportation.com/wp-content/uploads/2017/04/Sprinter-Limo-Van-Exterior-1.jpg"
                alt="Sprinter" 
            />
            <Carousel.Caption>
                <h3>Luxury Transportation Service</h3>
                <p style = {{fontSize: "20px"}}>For all your transportation needs</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                width={900} height={670} alt="900x500"
                src="https://cdn.pixabay.com/photo/2015/09/02/13/04/marriage-918864_1280.jpg"
                alt="wedding"
            />
        
            <Carousel.Caption>
                <h3></h3>
                <p style = {{fontSize: "20px"}}></p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                width={900} height={670} alt="900x500"
                src="https://res.cloudinary.com/outdoorsy/image/upload/w_1200/v1560527457/p/rentals/125872/images/oi3lkkeybio3bvxmirau.jpg"
                alt="quince"
            />
        
            <Carousel.Caption>
                <h3></h3>
                <p style = {{fontSize: "20px"}}> </p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel><br></br>
      </div>
    </React.Fragment>
        )
    }
}

export default Homepage