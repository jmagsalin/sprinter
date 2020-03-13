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
             <p className = "aboutText"></p><br></br>
             </Container>
         </Jumbotron>
    </React.Fragment>
    )
    }
}

export default Contact