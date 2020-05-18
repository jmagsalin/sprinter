import React, {Component} from 'react';
import {Container, Jumbotron, Row, Col} from 'react-bootstrap';
import Message from "./message"

class Contact extends Component {
  render(){
    return (
    <React.Fragment>
        <Jumbotron fluid className = "contactJumbotron">
            <Container>
             <h1 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                 Contact North County Luxury Transportation
             </h1>
             <h1 className = "servText" style = {{fontFamily: "Cambria", color: "#848480", textAlign: "center"}}>
                 Let us begin your journey
             </h1>
             </Container>
         </Jumbotron>
         <Container>
         <h2 style = {{fontFamily: "Cambria", color: "#94790D", fontSize: "38px"}}>Contact us</h2>
         <h2 style = {{fontFamily: "Cambria", fontStyle: "italic", color: "#848480"}}>
                    Our professional staff is ready to plan your transportation
         </h2>
         <h4 style = {{fontFamily: "Cambria", color: "black"}}>Our professional staff is ready to help, 
                answer questions and plan your luxury transportation. 
                Call, email or fill out the form and we’ll get back to you quickly.  San Diego's
                finest luxury transportation service is ready to answer any questions, give a free quote,
                or make a reservation.
                </h4>
        </Container><br></br><br></br>
         <div style = {{fontFamily: "Cambria", backgroundColor: "#E8E5DD"}}><br></br>
         <Container>
         <Row>
             <Col>
                <div style = {{textAlign: "left"}}>
                <h3>How may we help you?</h3>
                <h5 style = {{color: "#848480"}}>Our team is ready to help 
                answer questions and plan your transportation. 
                Call, email or fill out the form and we’ll get back to you quickly. 
                </h5><br></br>
                <h3>Contact Information</h3>
                    <p style = {{fontSize: "18px", fontFamily: "Cambria", color: "#94790D"}}><img
                        alt=""
                        src="https://www.kingswaycompounding.com.au/wp-content/themes/bb-theme-child/images/phone-icon-gold.png"
                        width="50"
                        height="35"
                        className="d-inline-block align-top"
                    /> (858) 888-5734</p>
                    <p style = {{fontSize: "18px", fontFamily: "Cambria", color: "#94790D"}}><img
                        alt=""
                        src="https://pngimg.com/uploads/email/email_PNG47.png"
                        width="50"
                        height="35"
                        className="d-inline-block align-top"
                    /> info@ncluxurytransportation.com</p>
                <h3>Social Media</h3>
                <p style = {{fontSize: "18px", fontFamily: "Cambria", color: "#94790D"}}>
                    <a href="https://www.facebook.com/kaoathletics/" target = "blank"><img
                        alt=""
                        src="https://www.pngkey.com/png/full/50-504085_facebook-hotel-klosterbru-logo-facebook-gold-png.png"
                        width="50"
                        height="35"
                        className="d-inline-block align-top"
                    /></a>         <a href="https://www.instagram.com/nc_luxury_transportation/?hl=en" target = "blank"> <img
                    alt=""
                    src="https://i.ya-webdesign.com/images/gold-social-media-icons-png-16.png"
                    width="50"
                    height="35"
                    className="d-inline-block align-top"
                /></a></p>
            </div>
             </Col>
             <Col>
                <h3>Message us</h3>
                <Message/>
             </Col>
         </Row>
         </Container>
        </div>
    </React.Fragment>
    )
    }
}

export default Contact