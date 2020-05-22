import React, {Component} from 'react';
import {Container, Jumbotron, Row, Col, Image} from 'react-bootstrap';

class Beaches extends Component {
    render(){
      return (
      <React.Fragment>
          <Jumbotron fluid className = "beachesJumbotron">           
               <Container><br></br>
               <h1 style = {{fontFamily: "Cambria", color: "#94790D" }}>Beaches</h1>
               <h1 className = "aboutText" style = {{color: "white"}}>
                   Visit the world class beaches of San Diego
               </h1><br></br>
               </Container>
           </Jumbotron>
           <Container>
                <h2 style = {{fontFamily: "Cambria", color: "#94790D", fontSize: "37px"}}>
                    Visit San Diego's world renowned beaches
                </h2>
                <h2 style = {{fontFamily: "Cambria", fontStyle: "italic", color: "#848480"}}>
                    We provide stylish transportation to any beach and beach city
                </h2>
                <h4 style = {{fontFamily: "Cambria", color: "black"}}>
                    San Diego is home to the worlds finest beaches and beach cities. North
                    County Luxury Transportation can offer safe and reliable transportation to any 
                    beach and beach city in San Diego, whether looking to relax on the beach or have a fun night out. 
                </h4><br></br>
            </Container>
        <div style = {{backgroundColor: "#E8E5DD", fontFamily: "Cambria"}}>
           <Container><br></br>
                <Row>                  
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Have a night out by the beach
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            San Diego's hottest spots are along the coast
                        </h3>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}> 
                            San Diego has some of the hottest nightlife in the country and many of those places are along the beach.  
                            Whether you're looking for a night out at the bars or a nice spot for dinner there's a place for you in San 
                            Diego's beach cities. 
                        </h5><br></br>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}>
                            Our professional staff can take you to the best spots along the beach whether you are looking for a hot bar or 
                            a perfect spot for a relaxing night out.  Let us take the worry out of finding the perfect spot, our
                            staff will take care of all the details.
                        </h5>
                    </Col>
                    <Col>
                <Image height= {350} width = {500} src="https://media-cdn.tripadvisor.com/media/photo-s/0e/50/3c/a1/pacific-beach-nightlife.jpg" rounded />
                    </Col>
                </Row><br></br>
            </Container>
        </div>
            <Container style = {{fontFamily: "Cambria"}}><br></br>
                <Row>
                    <Col>
                    <Image height= {330} width= {500} src="https://www.californiabeaches.com/wp-content/uploads/2014/09/La-Jolla-Shores-San-Diego-BryceApr16-3-1000x647.jpg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            World class beaches
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            World's largest military air show
                        </h3>
                        <h5 style = {{textAlign: "left"}}> 
                            San Diego is regarded as one of the premier destinations in the entire world and a major reason for 
                            that is the famous beaches.  People come from all over the world to hang out and enjoy San Diego's beaches.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            North County Luxury Transportation can take you to all the famous beaches you have heard about or seen on tv.  
                            No need to worry about parking or finding your destination, our knowledgeable staff knows all the best beaches to 
                            visit and experience the best San Diego has to offer.
                        </h5>
                    </Col>
                </Row><br></br>
            </Container>
            <div style = {{backgroundColor: "#E8E5DD", fontFamily: "Cambria"}}>
            <Container><br></br>
                <Row>                  
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Del Mar Race Track and Fairgrounds
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Home of the San Diego Fair and Pacific Classic
                        </h3>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}> 
                            The Del Mar Fairgrounds are home to San Diego's most popular and exciting events, the Del Mar horse 
                            races and the San Diego Fair.  Bring your friends and family to San Diego's most famous events in style and 
                            comfort.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}>
                            North County Luxury Transportation can take your group to the Del Mar Fairgrounds in luxury and hassle free. 
                            We can take the worry of traffic and parking out of your exciting day at the races or your family and 
                            friends outing at the San Diego Fair.  Let us make your day in Del Mar all about fun and excitement.
                        </h5>
                    </Col>
                    <Col>
                <Image height= {350} width = {500} src="https://www.gannett-cdn.com/presto/2019/07/23/USAT/aacff199-9129-4594-af1a-c273cc19ed22-AP_Del_Mar_Horse_Racing.JPG" rounded />
                    </Col>
                </Row><br></br>
            </Container>
            </div>
      </React.Fragment>
           )
    }
}

export default Beaches