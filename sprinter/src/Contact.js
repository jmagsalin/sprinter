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
         <h1 style = {{fontFamily: "Cambria", color: "#94790D"}}>Contact us</h1><br></br>
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
                        src="https://i.pinimg.com/originals/b6/40/cf/b640cf3d99e362fa2020f4be1302efaf.jpg"
                        width="50"
                        height="35"
                        className="d-inline-block align-top"
                    /> Email.PremierSprinterService.com</p>
                <h3>Social Media</h3>
                <p style = {{fontSize: "18px", fontFamily: "Cambria", color: "#94790D"}}>
                    <a href="https://www.instagram.com/kaobasketball/?hl=en" target = "blank"><img
                        alt=""
                        src="https://lh3.googleusercontent.com/proxy/ofY28tqPjXfju3u66T5cqIAHDV7Fiyh-dExn9SllIQRf0gn-7eVbp6LwxJsUQ_izQ_HXzt_f19gwoMFgtkRADrkAPSVJ62Yx0x2CcNadX2SAnYEa5sea0MYWYE5Y8ZKOEOkQ9CVvB_A7xnUyPYm1vEJAZ8UFARL9zw1Ag_fRkhalyjhJ5y41VtcNPFtO6uAk"
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
             <Col>
             
             </Col>
         </Row>
         </Container>
        </div>
    </React.Fragment>
    )
    }
}

export default Contact