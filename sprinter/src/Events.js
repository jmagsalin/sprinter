import React, {Component} from "react"
import {Image, Container, Row, Col, Jumbotron, Button} from "react-bootstrap"
import Wedding from "./Wedding.jpg"

class Events extends Component {     
    render(){
        return (
            <React.Fragment>
                <Jumbotron fluid className ="eventsJumbotron">           
                <Container><br></br>
                    <h1 style = {{fontFamily: "Cambria", color: "#94790D" }}>Perfect for any Event</h1>
                    <h1 className = "servText">Our Sprinter Limos and SUV's are perfect for any and all occasions whether it be for wedding parties, bachelor 
                                                or bachelorette parties, prom, or just a night out on town </h1><br></br> 
                </Container>
                </Jumbotron>
            <div style = {{fontFamily: "Cambria"}}>
            <Container>
                <h2 style = {{fontFamily: "Cambria", color: "#94790D", fontSize: "37px"}}>
                    For That Special Event
                </h2>
                <h2 style = {{fontFamily: "Cambria", fontStyle: "italic", color: "#848480"}}>
                    Our fleet of vehicles is perfect for any event
                </h2>
                <h4 style = {{fontFamily: "Cambria", color: "#848480"}}>
                    From weddings to wine tours, nights out to sporting events, treat yourself and your guests to a luxury 
                    transportation experience to last a lifetime. Our professional staff is here to ensure that
                    every detail is perfect. With so much San Diego has to offer, why take on the hassle of driving to a special event?  
                    Let North County Luxury Transportation provide you with a memorable night out.
                </h4><br></br>
                <Button 
                    className = "footerb"
                    variant="dark"
                    size = "lg"
                    href = "Rates"
                    fontFamily = "Cambria">Event Rates</Button><br></br>   
            </Container><br></br>
            <div style = {{backgroundColor: "#E8E5DD"}}>
            <Container><br></br>
                <Row>
                    <Col>
                    <Image height= {300} width= {500} src="https://cdn.pixabay.com/photo/2017/04/05/14/37/prom-2205139_1280.jpg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Formals
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Arrive at your formal in luxury and be the stars of the night
                        </h3>
                        <h5 style = {{ textAlign: "left"}}> There is no experience like that of going to a Homecoming or Prom with your closest friends, it is a night that you won't ever forget.
                            Why not treat this experience with a memorable ride.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            Our Sprinter Limos will and luxury SUV's will make sure you have a memorable time with your life long friends and
                            have a night you won't forget.
                        </h5>
                    </Col>
                </Row>
            </Container><br></br>
            </div>
            <Container><br></br>
                <Row>                  
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Weddings
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Arrive at your wedding in luxury and make your special day perfect
                        </h3>
                        <h5 style = {{textAlign: "left"}}> 
                            Make your special, once-in-a-lifetime wedding experience even more special with our luxury Mercedes Sprinter
                            Limo or any of our luxury state-of-the-art SUV's.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            No matter which vehicle you choose we will make sure you have an experience of a lifetime and
                            have a wedding day you won't forget.  Our staff will make sure every detail is immaculate 
                            and that your wedding transportation goes as perfectly as it deserves.
                        </h5>
                    </Col>
                    <Col>
                    <Image height= {400} width = {600} src={Wedding} rounded />
                    </Col>
                </Row><br></br>
            </Container>
            <div style = {{backgroundColor: "#E8E5DD"}}>
            <Container><br></br>
                <Row>
                    <Col>
                        <Image height= {315} width= {500} src="https://cdn.pixabay.com/photo/2017/03/13/14/24/wine-bar-2139973_1280.jpg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                           Wine Tours
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Visit the Temecula wineries in style 
                        </h3>
                        <h5 style = {{textAlign: "left"}}> 
                            The wineries in Temecula are some of the best in the country if not the world, why not tour them worry free 
                            in one of our luxury vehicles.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            Grab some friends and ride in one of our luxury SUV's or even our Sprinter limo to make the most of the experience.
                            Our knowledgeable staff can plan out the perfect day of wine tasting or just tell us your favorite wineries, either way
                            we will make your wine tour experience comfortable and carefree.
                        </h5>
                    </Col>
                </Row><br></br>
            </Container>
            </div>
            <Container><br></br>
                <Row>                 
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Sporting and Concert Events
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Skip the hassle of big events 
                        </h3>
                        <h5 style = {{textAlign: "left"}}> 
                            Sporting events and concerts can be the experiences of a lifetime, but finding parking and fighting
                            through traffic can leave a sour taste behind.  Let us bring you to your event and leave all that 
                            hassle behind.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            Join the resurgence of San Diego State athletics and the up and coming Padres with one of our luxury
                            vehicles.  Check out a show at Viejas Arena or Spreckles Theater.  Whether using our stylish Sprinter 
                            limo or our comfortable 15 passenger Sprinter van, our
                            staff will ensure that you enjoy your event hassle free.
                        </h5>
                    </Col>
                    <Col>
                        <Image height= {330} width= {500} src="https://www.reviewjournal.com/wp-content/uploads/2016/10/web1_unlvsdsu_100816cs_001_7162290.jpg" rounded />
                    </Col>
                </Row><br></br>
                </Container>
                <div style = {{backgroundColor: "#E8E5DD"}}>
                    <Container><br></br>
                        <Row>
                            <Col>
                                <Image height= {320} width= {500} src="https://cdn.pixabay.com/photo/2017/06/04/11/00/beer-2370783_1280.jpg" rounded />
                            </Col>
                            <Col>
                                <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                                    Brewery Tours
                                </h2>
                                <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                                    Tour the breweries of San Diego, the center of craft brewing
                                </h3>
                                <h5 style = {{textAlign: "left"}}>
                                    No city in America has grown more in the craft beer industry for the last 10 years than San Diego.  Whether 
                                    you like IPA's, sours, lagers or stouts - San Diego has something for you.  
                                </h5><br></br>
                                <h5 style = {{textAlign: "left"}}>
                                    With areas such as Miramar, North Park and San Marcos, you and your friends can easily try several breweries
                                    in a single day all without the worry of driving.  Let our knowledgeable staff take you to the best breweries in 
                                    San Diego worry free.
                                </h5>
                            </Col>
                        </Row><br></br>
                    </Container>
                </div>
            <Container><br></br>
                <Row>                 
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Nights Out
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Take a night out on town as a VIP
                        </h3>
                        <h5 style = {{textAlign: "left"}}> 
                            Why not take a night out in class and style without the worry of driving.  Let our knowledgeable staff drive you to 
                            the hottest spots in San Diego.  
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            If you're looking to have an exciting night out in the Gaslamp District or want to hit Garnet Avenue in Pacific Beach,
                            we have the luxury transportation to take your night to the next level. No matter your plans for the night,
                            our staff will make sure you have a memorable experience.
                        </h5>
                    </Col>
                    <Col>
                        <Image height= {320} width= {500} src="https://cdn.pixabay.com/photo/2017/03/25/09/51/party-2173187_1280.jpg" rounded />
                    </Col>
                </Row><br></br>
                </Container>
                  
                </div>
            </React.Fragment>
            )
        }
    }

export default Events