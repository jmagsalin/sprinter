import React, {Component} from 'react';
import {Container, Jumbotron, Row, Col, Image} from 'react-bootstrap';

class Contact extends Component {
  render(){
    return (
    <React.Fragment>
        <Jumbotron fluid className = "contactJumbotron">
            <Container>
             <h1 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                 Contact Premier Sprinter Service
             </h1>
             </Container>
         </Jumbotron>
         <Container>
         <h1 style = {{fontFamily: "Cambria", color: "#94790D"}}>Contact us</h1><br></br>
         <h4 style = {{fontFamily: "Cambria", color: "#848480"}}>Our concierge team is ready to help, 
                answer questions and plan your luxury transportation. 
                Call, email or fill out the form and we’ll get back to you quickly.  San Diego's
                finest luxury transportation service is ready to provide answers to any questions, give a free quote,
                or make a reservation.
                </h4>
        </Container><br></br><br></br>
         <div style = {{fontFamily: "Cambria", backgroundColor: "#E8E5DD"}}><br></br>
         <Container>
         <Row>
             <Col>
                <div style = {{textAlign: "left"}}>
                <h3>How May We Serve You?</h3>
                <h5 style = {{color: "#848480"}}>Our concierge team is ready to help, 
                answer questions and plan your luxury transportation. 
                Call, email or fill out the form and we’ll get back to you quickly. 
                </h5><br></br>
                <h3>Contact Information</h3>
                    <p style = {{fontSize: "18px", fontFamily: "Cambria", color: "#94790D"}}><img
                        alt=""
                        src="https://www.kingswaycompounding.com.au/wp-content/themes/bb-theme-child/images/phone-icon-gold.png"
                        width="50"
                        height="35"
                        className="d-inline-block align-top"
                    /> (855) 555-2398</p>
                    <p style = {{fontSize: "18px", fontFamily: "Cambria", color: "#94790D"}}><img
                        alt=""
                        src="https://pngimg.com/uploads/email/email_PNG47.png"
                        width="50"
                        height="35"
                        className="d-inline-block align-top"
                    /> Email.PremierSprinterService.com</p>
                <h3>Social Media</h3>
                <p style = {{fontSize: "18px", fontFamily: "Cambria", color: "#94790D"}}>
                    <a href="https://www.facebook.com/kaoathletics/" target = "blank"><img
                        alt=""
                        src="https://www.jing.fm/clipimg/full/305-3057438_free-png-download-gold-facebook-icon-png-images.png"
                        width="50"
                        height="35"
                        className="d-inline-block align-top"
                    /></a>         <a href="https://www.instagram.com/kaobasketball/?hl=en" target = "blank"> <img
                    alt=""
                    src="https://i.ya-webdesign.com/images/gold-social-media-icons-png-16.png"
                    width="50"
                    height="35"
                    className="d-inline-block align-top"
                /></a></p>
            </div>
             </Col>
             <Col xs = {6}>
                <h3>Message us</h3>
             </Col>
         </Row>
         </Container>
        </div>
    </React.Fragment>
    )
    }
}

export default Contact