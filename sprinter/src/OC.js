import React, {Component} from 'react';
import {Container, Jumbotron, Row, Col, Image} from 'react-bootstrap';

class Orange extends Component {
    render(){
      return (
      <React.Fragment>
          <Jumbotron fluid className = "ocJumbotron">           
               <Container><br></br>
               <h1 style = {{fontFamily: "Cambria", color: "#94790D" }}>Orange County</h1>
               <h1 className = "aboutText" style = {{color: "white"}}>
                   Visit the famous Orange County
               </h1><br></br>
               </Container>
           </Jumbotron>
           <Container>
                <h2 style = {{fontFamily: "Cambria", color: "#94790D", fontSize: "37px"}}>
                    Visit the famous sites of Orange County
                </h2>
                <h2 style = {{fontFamily: "Cambria", fontStyle: "italic", color: "#848480"}}>
                    We provide stylish transportation to any city in Orange County
                </h2>
                <h4 style = {{fontFamily: "Cambria", color: "black"}}>
                    Orange County is home to Disneyland, Knott's Berry Farm, famous beaches, and many other popular tourist attractions. North
                    County Luxury Transportation can offer safe and reliable transportation to any 
                    attraction in Orange County, whether looking to have a fun day at Disneyland or relax on one of their world famous beaches. 
                </h4><br></br>
            </Container>
        <div style = {{backgroundColor: "#E8E5DD", fontFamily: "Cambria"}}>
           <Container><br></br>
                <Row>                  
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Have a fun day at Disneyland
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Orange County's most famous attraction
                        </h3>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}> 
                            Disneyland is one of the most visited attractions in the world and is just a short ride from San Diego. whether
                            taking your children to see the Disney characters or going with friends to ride the many attractions, Disneyland
                            has something for everyone.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}>
                            Let North County Luxury Transportation take you to Disneyland without the hassle of traffic and parking so you, your
                            friends and family can enjoy the excitement of Disneyland.  Our professional staff can take care of
                            your transportation while you and your group have an exciting day at Disneyland.
                        </h5>
                    </Col>
                    <Col>
                <Image height= {350} width = {500} src="https://cdn.pixabay.com/photo/2014/09/19/10/02/disneyland-park-452001_1280.jpg" rounded />
                    </Col>
                </Row><br></br>
            </Container>
        </div>
            <Container style = {{fontFamily: "Cambria"}}><br></br>
                <Row>
                    <Col>
                    <Image height= {330} width= {500} src="https://9563605a79f2e8ef285a-25740e849209231f1259cdc5ca37d9e2.ssl.cf2.rackcdn.com/v2_JW18VUSO1D1389_900_471_98auto.jpg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            World famous beaches
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Beaches you've seen on television
                        </h3>
                        <h5 style = {{textAlign: "left"}}> 
                            If you've watched television anytime within the last twenty years you've probably seen Orange County beaches featured prominently whether
                            you watch network television, MTV, or Netflix.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            We can take you to all the famous beaches you have heard about or seen on tv.  
                            If you want to check out Laguna Beach's art scene, Newport Beach's peninsula, or the US Open of Surfing in Huntington
                            Beach, our knowledgeable staff can take you anywhere along the Orange County coast.
                        </h5>
                    </Col>
                </Row><br></br>
            </Container>
            <div style = {{backgroundColor: "#E8E5DD", fontFamily: "Cambria"}}>
            <Container><br></br>
                <Row>                  
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Knott's Berry Farm
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Southern California's original theme park
                        </h3>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}> 
                            Knott's Berry Farm has been around for 100 years and is just as popular as ever.  With 40 rides to choose from,
                            Knott's has plenty of excitement to offer.

                        </h5><br></br>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}>
                            North County Luxury Transportation can take your group to Knott's Berry Farm in comfort and style hassle free. 
                            We can take the worry of traffic and parking out of your day while you have fun with your family and 
                            friends.  Let us make your day at Knott's Berry Fun all about fun.
                        </h5>
                    </Col>
                    <Col>
                <Image height= {350} width = {500} src="https://www.sandiego.com/sites/sandiego.com/files/content/listing/thumbnail/knotts_berry_farm_sidewinder.jpg" rounded />
                    </Col>
                </Row><br></br>
            </Container>
            </div>
      </React.Fragment>
           )
    }
}

export default Orange