import React, {Component} from 'react';
import {Container, Jumbotron, Row, Col, Image} from 'react-bootstrap';

class Miramar extends Component {
    render(){
      return (
      <React.Fragment>
          <Jumbotron fluid className = "miramarJumbotron">           
               <Container><br></br><br></br>
               <h1 style = {{fontFamily: "Cambria", color: "#94790D" }}>Miramar</h1>
               <h1 className = "aboutText" style = {{color: "#848480"}}>Home of the Miramar Air Show and some of San Diego's finest breweries</h1><br></br>
               </Container>
           </Jumbotron>
           <Container>
                <h2 style = {{fontFamily: "Cambria", color: "#94790D", fontSize: "37px"}}>
                    Visit San Diego's finest breweries and America's premier air show
                </h2>
                <h2 style = {{fontFamily: "Cambria", fontStyle: "italic", color: "#848480"}}>
                    We provide reliable and safe transportation for any occasion in Miramar
                </h2>
                <h4 style = {{fontFamily: "Cambria", color: "black"}}>
                    Miramar is the home to some of San Diego's finest breweries and the world's largest military air show.  North
                    County Luxury Transportation can offer safe and reliable transportation to any event in Miramar, whether looking to go on a 
                    brewery tour or need a hassle free ride to the Miramar Air Show.
                </h4><br></br>
            </Container>
        <div style = {{backgroundColor: "#E8E5DD", fontFamily: "Cambria"}}>
           <Container><br></br>
                <Row>                  
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Tour Miramar's famous breweries
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            The home of America's finest breweries
                        </h3>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}> 
                            San Diego is widely regarded as one of the premier brewery destinations in the entire world.  Miramar
                            is at the center of the microbrewery industry in San Diego with close to twenty breweries and tasting
                            rooms in the area.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}>
                            Twenty breweries are far too many to visit in one day but our knowledgeable staff can plan your 
                            brewery tour to accommodate your specific tastes or can take you to any brewery that you may want to visit. 
                            Let us take you on your brewery tour and take the worry out of driving while you enjoy the world
                            class beers of Miramar.
                        </h5>
                    </Col>
                    <Col>
                <Image height= {350} width = {500} src="https://ca-times.brightspotcdn.com/dims4/default/ffeba0c/2147483647/strip/true/crop/1616x1080+0+0/resize/840x561!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8d%2F74%2F8e2a1d6c4a658e2a8aab222626fa%2Fimg-5553.JPG" rounded />
                    </Col>
                </Row><br></br>
            </Container>
        </div>
            <Container style = {{fontFamily: "Cambria"}}><br></br>
                <Row>
                    <Col>
                    <Image height= {330} width= {500} src="https://cdn.pixabay.com/photo/2015/03/27/14/52/air-show-694807_1280.jpg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Miramar Air Show
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            World's largest military air show
                        </h3>
                        <h5 style = {{textAlign: "left"}}> 
                            Miramar is also home to the Miramar Air Show, the annual air show held 
                            at Marine Corps Air Station Miramar. Held annually in October since 1953, the three day event is the world's
                            largest air show with total annual attendance estimated at 700,000.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            The Miramar Air Show is a must see experience in San Diego, let us take you to the Air Show in style and 
                            comfort so you don't have to worry about traffic and parking.  Our staff can take care of all the details
                            while you watch the breathtaking feats of the amazing pilots and tour the historical aircrafts on display.
                        </h5>
                    </Col>
                </Row><br></br>
            </Container>
      </React.Fragment>
           )
    }
}

export default Miramar