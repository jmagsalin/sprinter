import React, {Component} from "react"
import {Card, ListGroup, ListGroupItem, Container, Row, Col, Jumbotron} from "react-bootstrap"

class Services extends Component {
    render(){
        return (
            <React.Fragment>
            <Jumbotron fluid className ="servJumbotron">           
             <Container><br></br>
             <h1 style = {{fontWeight: "bold" }}>Perfect for any Occasion</h1>
             <p className = "servText">Our Sprinter Limos are perfect for any and all occasions whether it be for wedding parties, bachelor 
                                        or bachelorette parties, prom, or just a night out in town </p><br></br>
             </Container>
            </Jumbotron>
            </React.Fragment>
            )
        }
    }

export default Services