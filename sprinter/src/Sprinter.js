import React, {Component} from 'react';
import {Container, Jumbotron, Row, Col, Image} from 'react-bootstrap';

class Sprinter extends Component {
  render(){
    return (
    <React.Fragment>
        <Jumbotron fluid className = "sprinterJumbotron">           
             <Container>
                <h1 style = {{fontFamily: "Cambria", color: "#94790D"}} >Our Transportation Fleet</h1>
                <h1 className = "servText" style = {{textAlign: "center"}}>Our luxury transportation fleet is perfect for any and all occasions
                </h1><br></br>
             </Container>
         </Jumbotron>
         <Container>
            <h2 style = {{fontFamily: "Cambria", color: "#94790D", fontSize: "37px"}}>
              Our Sprinter Limos are Perfect for Any Occasion
            </h2>
            <h2 style = {{fontFamily: "Cambria", fontStyle: "italic", color: "#848480"}}>
              Ride in comfort, style and luxury
            </h2>
            <h4 style = {{fontFamily: "Cambria", color: "black"}}>
              Travel in unique style with luxury limousines, passenger vans and SUV's for events, executives and high school transportation. 
              We provide you with the ultimate modern transportation experience. 
              North County Luxury Transportation has a fleet of chauffeured vehicles for every occasion.
            </h4>
         </Container><br></br>
      <div style = {{backgroundColor: "#E8E5DD"}}>
        <Container>
            <h2 style = {{fontFamily: "Cambria", color: "#94790D", textAlign: "left", fontSize: "40px"}}>
              The Presidential Sprinter Limo
            </h2>
            <h2 style = {{fontFamily: "Cambria", color: "#848480", textAlign: "left", fontStyle: "italic"}}>
                Travel as a VIP
            </h2>
            <h5 style = {{fontFamily: "Cambria", textAlign: "left"}}>
              Comfortably Seats: Up to 8 passengers
            </h5><br>
            </br>
            <h5 style = {{fontFamily: "Cambria", textAlign: "left"}}>
            Comfort and luxury are a top priority with the Presidential, and it shows.  Designed for family or business use, enjoy power foot rests and two comfortable sofas that fold down to make into a bed - perfect for a quick nap or overnight travel.  There is wireless Internet to surf the web or send emails.  
            Enjoy Apple TV so you can watch your favorite movies, live TV, sports or play video games on the two flat-screen TVs. 
            </h5><br></br>
            <h5 style = {{fontFamily: "Cambria", textAlign: "left"}}>
            You can even swivel the middle row of captain chairs in either direction - something that’s unique to the Presidential Sprinter Limo and is a customer favorite.  For family outings, face the seats forward so everyone can enjoy each other’s company, or swivel them around and your Presidential instantly 
            converts into club seating - ideal for holding a meeting, carrying on a conversation, or having the perfect “limo” configuration.
            </h5><br></br>
         <Row>            
              <Col  style = {{textAlign: "left"}}>
                  <h3 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                      Key Features:
                  </h3>
                  <ul style = {{fontSize: "large"}}>
                    <li>Seats up to 8</li>
                    <li>Power footrests</li>
                    <li>Two HD TV's</li>
                    <li>High end tech & audio</li>
                    <li>Fold down couches</li>
                    <li>USB outlets</li>
                    <li>HDMI ports</li>
                  </ul>
                </Col>
                <Col style = {{textAlign: "left"}}><br></br><br></br>
                  <ul style = {{fontSize: "large"}}>
                    <li>Refridgerator/Freezer</li>
                    <li>Lap tables</li>
                    <li>Spacious luggage area</li>
                    <li>WiFi & Apple TV</li>
                    <li>Deluxe lighting controls</li>
                    <li>Blu-ray/DVD/CD player</li>
                  </ul>
              </Col>
              <Col >
                 <Image height= {280} width = {500} src="https://www.ultimatetoys.com/wp-content/uploads/2020/02/presidential_open_5_nov_0007_web.jpg" rounded />
              </Col>
          </Row><br></br>
          </Container>
        </div>
        <Container>
            <h2 style = {{fontFamily: "Cambria", color: "#94790D", textAlign: "left", fontSize: "40px"}}>
              Mercedes Sprinter Passenger Van
            </h2>
            <h2 style = {{fontFamily: "Cambria", color: "#848480", textAlign: "left", fontStyle: "italic"}}>
                Group travel in comfort
            </h2>
            <h5 style = {{fontFamily: "Cambria", textAlign: "left"}}>
              Comfortably Seats: Up to 15 passengers
            </h5><br>
            </br>
            <h5 style = {{fontFamily: "Cambria", textAlign: "left"}}>
              The Mercedes Benz Sprinter is an innovative van, with a unique inspiration. The cabin
              area redefines comfort with ergonomic seats and a redesigned instrument cluster. The new Sprinter takes 
              connectivity into the future with the MBUX (Mercedes-Benz User Experience) Multimedia System and advancements
              that include Live Traffic Information, and the Mercedes-Benz Emergency Call System. 
            </h5><br></br>
            <h5 style = {{fontFamily: "Cambria", textAlign: "left"}}>
              The Sprinter passenger van provides comfortable group travel with seating for up to 15 people, and provides an 
              experience every one of them will enjoy. USB-C ports can keep them connected, and the spacious rear storage area 
              provides ample room for luggage. All the while, you’ll know that they’re protected by a level of safety only
              Mercedes-Benz can deliver. 
            </h5><br></br>
         <Row>            
              <Col  style = {{textAlign: "left"}}>
                  <h3 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                      Key Features:
                  </h3>
                  <ul style = {{fontSize: "large"}}>
                    <li>Seats up to 15</li>
                    <li>Electric sliding door</li>
                    <li>Electric sliding step</li>
                    <li>Automatic climate control</li>
                    <li>Heavy duty rear air conditioner</li>
                    <li>Ample head room with standing height of 6'3"</li>
                    <li>Generous leg room with 70" of floor width</li>
                  </ul>
                </Col>
                <Col style = {{textAlign: "left"}}><br></br><br></br>
                  <ul style = {{fontSize: "large"}}>
                    <li>Bluetooth compatability</li>
                    <li>1st row LCD screen</li>
                    <li>13 speakers</li>
                    <li>Side impact airbags</li>
                    <li>Side curtain airbags</li>
                    <li>Auxiliary input jack</li>
                  </ul>
              </Col>
              <Col >
                 <Image height= {320} width = {500} src="https://www.mercedes-benz-vans.ca/images/features/sprinter/passenger-van/seating-capacity.jpg" rounded />
              </Col>
          </Row><br></br>
          </Container>
        <div style = {{backgroundColor: "#E8E5DD"}}>
        <Container>
            <h2 style = {{fontFamily: "Cambria", color: "#94790D", textAlign: "left", fontSize: "40px"}}>
              Cadillac Escalade
            </h2>
            <h2 style = {{fontFamily: "Cambria", color: "#848480", textAlign: "left", fontStyle: "italic"}}>
                Classic luxury SUV
            </h2>
            <h5 style = {{fontFamily: "Cambria", textAlign: "left"}}>
              Comfortably Seats: Up to 8 passengers
            </h5><br>
            </br>
            <h5 style = {{fontFamily: "Cambria", textAlign: "left"}}>
              From a striking design aesthetic, to a comfortable and accommodating cabin that is as spacious as it is
              versatile, the Cadillac Escalade offers nothing but the best.  When you step inside, you’ll see tremendous 
              space and a range of amenities that offer everything from a hand-stitched steering wheel to cutting-edge technologies.
            </h5><br></br>
            <h5 style = {{fontFamily: "Cambria", textAlign: "left"}}>
              A variety of features transform the cabin into that rare place where tranquility, comfort and entertainment go hand
              in hand. Tri-Zone Climate Control allows the driver, front passenger and rear passengers to adjust temperatures 
              individually. With stunning conveniences and sublime comforts, this cabin is perfect. Amenities such as heated front and rear outboard seats, as well as front seats that cool, are
              only the beginning.
            </h5><br></br>
         <Row>            
              <Col  style = {{textAlign: "left"}}>
                  <h3 style = {{color: "#94790D"}}>
                      Key Features:
                  </h3>
                  <ul style = {{fontSize: "large"}}>
                    <li>Seats up to 8 in three rows</li>
                    <li>Apple CarPlay</li>
                    <li>Android Auto connectivity</li>
                    <li>Bose surround-sound audio system</li>
                    <li>Wireless device charging</li>
                    <li>Tri-zone automatic climate control</li>
                    <li>Heated and cooled front seats</li>
                  </ul>
                </Col>
                <Col style = {{textAlign: "left"}}><br></br><br></br>
                  <ul style = {{fontSize: "large"}}>
                    <li>Heated second-row seats</li>
                    <li>Cadillac User Experience multimedia system</li>
                    <li>Spacious luggage area</li>
                    <li>Five USB ports</li>
                    <li>Hands-free liftgate</li>
                    <li>Front, rear and third row head airbags</li>
                  </ul>
              </Col>
              <Col >
                 <Image height= {320} width = {500} src="https://hennesseyperformance.com/wp-content/uploads/2014/05/HPE800-Escalade-2016-Supercharged-8-crop-1.jpg" rounded />
              </Col>
          </Row><br></br>
          </Container>
        </div>
        <Container>
            <h2 style = {{fontFamily: "Cambria", color: "#94790D", textAlign: "left", fontSize: "40px"}}>
              Chevy Suburban
            </h2>
            <h2 style = {{fontFamily: "Cambria", color: "#848480", textAlign: "left", fontStyle: "italic"}}>
                Legendary SUV for any occasion
            </h2>
            <h5 style = {{fontFamily: "Cambria", textAlign: "left"}}>
              Comfortably Seats: Up to 6 passengers
            </h5><br>
            </br>
            <h5 style = {{fontFamily: "Cambria", textAlign: "left"}}>
              When adventures await, the legendary Chevrolet Suburban offers more of everything you expect — uncommon
              spaciousness, commanding performance and ingenious safety technology. The luxury is all-encompassing. The
              capability is exceptional. Everything about the Chevy Suburban makes it the ideal vehicle for any occasion.
            </h5><br></br>
            <h5 style = {{fontFamily: "Cambria", textAlign: "left"}}>
              Convenient power-release second-row bucket seats on Premier provide easy access to the spacious third row. There’s 
              space available for up to six passengers and second and third rows that fold down, so Suburban is ready for 
              anything your day might hold. With Apple CarPlay, you can simply and smartly connect with some of your most used 
              iPhone® features and with Android Auto capability you can quickly and intuitively interact with select smartphone apps.
            </h5><br></br>
         <Row>            
              <Col  style = {{textAlign: "left"}}>
                  <h3 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                      Key Features:
                  </h3>
                  <ul style = {{fontSize: "large"}}>
                    <li>Seats up to 6</li>
                    <li>Apple CarPlay compatability</li>
                    <li>Android Auto compatability</li>
                    <li>Dual-level storage</li>
                    <li>USB outlets</li>
                    <li>Assist steps</li>
                    <li>5 USB ports and auxiliary input jack</li>
                    <li>Deluxe lighting controls</li>
                    <li>Tri-zone automatic climate controls</li>                
                  </ul>
                </Col>
                <Col style = {{textAlign: "left"}}><br></br><br></br>
                  <ul style = {{fontSize: "large"}}>
                    <li>Individual climate settings for right-front passenger and rear passengers</li>
                    <li>Head-curtain air bags for all rows in outboard seating positions</li>
                    <li>Frontal and side-impact air bags for driver and front passenger</li>      
                  </ul>
              </Col>
              <Col >
                 <Image height= {320} width = {500} src="https://cdn.autoversed.com/autoversed/wp-content/uploads/2018/10/Feature.jpg" rounded />
              </Col>
          </Row><br></br>
          </Container>
     </React.Fragment>
    )
  }
}

export default Sprinter