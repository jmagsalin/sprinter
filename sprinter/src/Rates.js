import React, {Component} from 'react';
import {Container, Jumbotron, Row, Col, Image, Table} from 'react-bootstrap';

class Rates extends Component {
  render(){
    return (
    <React.Fragment>
        <Jumbotron fluid className = "ratesJumbotron">           
             <Container>
             <h1 style = {{fontFamily: "Cambria", color: "#94790D"}} >Rate Information</h1>
             <h1 className = "aboutText" style = {{color: "white"}}>Rates for your special events</h1><br></br>
             <p className = "aboutText"></p><br></br>
             </Container>
         </Jumbotron>
         <div style = {{fontFamily: "Cambria"}}>
            <Container>
                <h2 style = {{color: "#94790D", fontSize: "37px"}}>
                    We Have Everything for Your Transportation Needs
                </h2>
                <h2 style = {{fontFamily: "Cambria", fontStyle: "italic", color: "#848480"}}>
                   Transportation at the right prices
                </h2>
                <h4 style = {{color: "black"}}>Our service team 
                    makes sure every detail is perfect and can make reservations, provide catering and create itineraries.
                    If you don't see what you need, don't hesitate to contact us and we can taylor your experience to accommodate all of your needs.
                </h4><br></br><br></br>
            </Container>
            <div style = {{backgroundColor: "#E8E5DD"}}>
            <Container><br></br>
                <Row>
                    <Col>
                    <Image height= {500} width= {550} src="https://cdn.pixabay.com/photo/2015/05/25/05/20/winery-782704_1280.jpg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Wine Tours
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                        Tour Temecula wineries in style
                        </h3>
                        <h5 style = {{textAlign: "left"}}>
                        Select your vehicle, then select your favorite wineries or allow us to customize a tour for you.  Our 
                        staff will ensure a great experience throughout your tour.  Small groups or an intimate occasion, we are here to drive you.
                        </h5><br></br>
                        <Table size = "sm" striped bordered hover variant = "dark">
                            <thead>
                                <tr>
                                <th style = {{verticalAlign: "middle"}}>Number of Hours</th>
                                <th>SUV <br></br>(2-6 passengers)</th>
                                <th>Luxury Custom Sprinter <br></br>(2-8 passengers)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>5</td>
                                <td>$450</td>
                                <td>$550</td>
                                </tr>
                                <tr>
                                <td>6</td>
                                <td>$525</td>
                                <td>$600</td>
                                </tr>
                                <tr>
                                <td>7</td>
                                <td>$600</td>
                                <td>$675</td>
                                </tr>
                                <tr>
                                <td>8</td>
                                <td>$650</td>
                                <td>$750</td>
                                </tr>
                            </tbody>
                    </Table>
                    <p style = {{textAlign: "left"}}>*Includes, fuel, taxes, bottled water and ice. Pricing is 
                        for San Diego County pick up and drop off only. Additional charges for 
                        pick up or drop off locations outside of San Diego County. </p>
                    </Col>
                </Row>
            </Container><br></br>
            </div>
            <Container><br></br>
                <Row>
                    <Col>
                    <Image height= {500} width= {550} src="https://cdn.pixabay.com/photo/2019/09/30/07/02/weddings-4515008_1280.jpg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Weddings
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                        Arrive at your wedding in luxury
                        </h3>
                        <h5 style = {{textAlign: "left"}}>
                        Our luxury fleet is perfect for weddings, starting with the Mercedes Sprinter limo.  Our 
                        staff will ensure a great experience throughout your wedding day. For you and your wedding party,
                        we are here to drive you.
                        </h5><br></br>
                        <Table size = "sm" striped bordered hover variant = "dark">
                            <thead>
                                <tr>
                                <th style = {{verticalAlign: "middle"}}>Number of Hours</th>
                                <th>SUV <br></br>(2-6 passengers)</th>
                                <th>Luxury Custom Sprinter <br></br>(2-8 passengers)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>4</td>
                                <td>$400</td>
                                <td>$550</td>
                                </tr>
                                <tr>
                                <td>6</td>
                                <td>$550</td>
                                <td>$675</td>
                                </tr>
                            </tbody>
                    </Table>
                    <p style = {{textAlign: "left"}}>*Wedding Limousine Package includes bottled water and champagne. 
                        Customizing  your choice of alcohol is recommended and not included in pricing.
                        <br></br>Our SUV service will also provide transportation for 
                        the bride and groom to return to their location of choice (within San Diego) 
                        after the reception for an additional charge of $200. 
                    </p>
                    </Col>
                </Row>
            </Container><br></br>
            <div style = {{backgroundColor: "#E8E5DD"}}>
            <Container><br></br>
                <Row>
                    <Col>
                    <Image height= {430} width= {550} src="https://cdn.pixabay.com/photo/2019/03/28/19/46/prom-4087893_1280.jpg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            High School Events
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Travel to Your formal in style
                        </h3>
                        <h5 style = {{textAlign: "left"}}>
                            Whether for just you and your date or your whole group of friends, we have the luxury vehicle for you.  Our 
                            staff will ensure your formal will be a memorable experience. For groups or an intimate occasion, our staff is here to drive you.
                        </h5><br></br>
                        <Table size = "sm" striped bordered hover variant = "dark">
                            <thead>
                                <tr>
                                <th style = {{verticalAlign: "middle"}}>Number of Hours</th>
                                <th>SUV <br></br>(2-6 passengers)</th>
                                <th>Luxury Custom Sprinter <br></br>(2-8 passengers)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>4</td>
                                <td>$450</td>
                                <td>$550</td>
                                </tr>
                                <tr>
                                <td>6</td>
                                <td>$600</td>
                                <td>$700</td>
                                </tr>
                            </tbody>
                    </Table>
                    <p style = {{textAlign: "left"}}>*Includes fuel, taxes, bottled water and ice. Pricing is for San Diego County pick up and drop off only. 
                        Additional charges for pick up or drop off locations outside of San Diego County.                        
                    </p>
                    </Col>
                </Row>
            </Container><br></br>
            </div>
        </div>
    </React.Fragment>
    )
  }
}
export default Rates