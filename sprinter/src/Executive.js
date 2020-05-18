import React, {Component} from 'react';
import {Container, Jumbotron, Row, Col, Image} from 'react-bootstrap';

class Executive extends Component {
    render(){
      return (
      <React.Fragment>
          <Jumbotron fluid className = "exJumbotron">           
               <Container>
               <h1 style = {{fontFamily: "Cambria", color: "#94790D" }}>Executive Transportation</h1>
               <h1 className = "aboutText">Luxurious Executive Transportation</h1><br></br>
               </Container>
           </Jumbotron>
           <Container>
                <h2 style = {{fontFamily: "Cambria", color: "#94790D", fontSize: "37px"}}>
                    For Executive Outings
                </h2>
                <h2 style = {{fontFamily: "Cambria", fontStyle: "italic", color: "#848480"}}>
                    Our fleet of vehicles is perfect for any executive event
                </h2>
                <h4 style = {{fontFamily: "Cambria", color: "black"}}>
                    Nothing compares to our luxurious and stylish transportation fleet for all your executive transportation. 
                    Our fleet is complete with all sorts of amenities, comforts and tech accessories. Whether you need to meet clients,
                    treat your staff or catch an airplane, we have everything you need. Let us take care of the details while you impress 
                    your clients, associates and staff.
                </h4><br></br>
            </Container>
            <div style = {{backgroundColor: "#E8E5DD", fontFamily: "Cambria"}}>
            <Container><br></br>
                <Row>                  
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Executive transportation in style 
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Executive transportation for every occasion
                        </h3>
                        <ul style = {{fontSize: "large", textAlign: "left"}}>
                            <li>Hosting meetings</li>
                            <li>Site tours</li>
                            <li>Corporate events and customer events</li>
                            <li>Airport pickups and transportation to and from all forms of public transportation</li>
                            <li>Social events and parties</li>
                            <li>Cross county commutes</li>
                            <li>Company retreats</li>
                            <li>Offsite training</li>
                            <li>Conferences</li>
                        </ul>             
                    </Col>
                    <Col>
                <Image height= {350} width = {500} src="https://www.ultimatetoys.com/wp-content/uploads/2018/09/SPRINTER_12_Enhanced-1600x844.jpg" rounded />
                    </Col>
                </Row><br></br>
            </Container>
            </div>
            <Container><br></br>
                <Row>
                    <Col>
                    <Image height= {400} width= {500} src="https://cdn.pixabay.com/photo/2014/10/27/23/09/meeting-505982_1280.jpg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Our staff will take care of all your executive needs
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Professional and reliable staff
                        </h3>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}> 
                            Just as we believe your business strives for excellence and integrity, we at North County Luxury Transportation also
                            strive for those same things. Our San Diego based Sprinter 
                            and SUV transportation service is built on integrity, reliability and knowledge and we understand the needs
                            of executives.  
                        </h5><br></br>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}>
                            We provide safe, clean and reliable transportation with highly trained professional chauffeurs and high-class vehicles. 
                            From our luxurious fleet to our professional staff, we will make sure your clients, staff and associates
                            have the best experience possible.
                        </h5>
                    </Col>
                </Row><br></br>
            </Container>
      </React.Fragment>
        )
    }
}

export default Executive