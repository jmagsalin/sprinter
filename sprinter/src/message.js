import React, {Component} from 'react';
import {Button, Form, FormControl, FormGroup, Row, Col, Container} from 'react-bootstrap';
import * as emailjs from 'emailjs-com'

class Message extends Component {
    constructor(){
        super()
            this.state = {
                name: '',
                email: '',
                phone: '',
                message: '',
                success: undefined,
            }
        }   
        
        handleSubmit = (e) => {
             e.preventDefault()
            
            const { name, email, message, phone, success } = this.state
            let templateParams = {
              from_name: name,
              to_name: 'sinestro542@gmail.com',
              message_html: message,
              phone_number: phone,
              email_address: email,
             }
             emailjs.send(
              'gmail',
              'template_0u8Y2JnR',
               templateParams,
              'user_pjcNkNIvWb54bMY2SUg0P'
             )
             let redirect = success === undefined ? true : false
             this.setState({ success: redirect })
             this.resetForm()
         }
        
         resetForm() {
            this.setState({
              name: '',
              email: '',
              phone: '',
              message: '',
            })
          }
        
          handleChange = (param, e) => {
            this.setState({ [param]: e.target.value })
          }

    render(){
        const { success } = this.state
        return(
            <React.Fragment>
            <Container>
            <body style = {{backgroundColor:"#E8E5DD"}}>
            <h5 style = {{fontFamily: "Cambria", color: "#848480", textAlign: "center"}}>We'll get back to you as quickly as possible</h5>
                <Form onSubmit={this.handleSubmit.bind(this)} style = {{fontFamily: "Cambria"}}>
                <Row>
                    <Col xs={6}>
                        <FormGroup controlId="formBasicName">
                        <label style = {{fontWeight: "bold", fontSize: 20, color: "#94790D"}}>Name</label>
                            <FormControl
                                type="text"
                                name="name"
                                style = {{borderColor: "black"}}
                                onChange={this.handleChange.bind(this, 'name')}
                                value={this.state.name}
                                />
                        </FormGroup>
                    </Col>
                    <Col xs={6}>
                        <FormGroup controlId="formBasicEmail">
                        <label style = {{fontWeight: "bold", fontSize: 20, color: "#94790D"}}>Email</label>
                                <FormControl
                                type="email"
                                name="email"
                                style = {{borderColor: "black"}}
                                onChange={this.handleChange.bind(this, 'email')}
                                value={this.state.email}
                                />
                        </FormGroup>
                    </Col>    
                </Row>         
                <Row>   
                    <Col xs={6}>
                        <FormGroup controlId="formBasicEmail">
                        <label style = {{fontWeight: "bold", fontSize: 20, color: "#94790D"}}>Phone</label>
                                <FormControl
                                type="phone"
                                name="phone"
                                style = {{borderColor: "black"}}
                                onChange={this.handleChange.bind(this, 'phone')}
                                value={this.state.phone}
                                />
                        </FormGroup>
                    </Col>
                </Row>   
                <Row>    
                    <Col xs = {10}>
                        <FormGroup controlId="formBasicMessage">
                        <label style = {{fontWeight: "bold", fontSize: 20, color: "#94790D"}}>Message</label>
                                <FormControl
                                as = "textarea"
                                className="textArea"
                                style = {{borderColor: "black"}}
                                type="text"
                                name="message"
                                onChange={this.handleChange.bind(this, 'message')}
                                value={this.state.message}
                                />
                        </FormGroup>
                    </Col>     
                </Row> <br></br> 
                <Button  
                    variant="dark"
                    style = {{borderColor: "#94790D", fontWeight: "bold"}}
                    className = "footerb" 
                    size = "large"
                    onClick = { this.handleSubmit }
                    >Submit</Button>
                {success === true &&
                <h2 style = {{textAlign: "left", color: "#94790D", outlineColor: "#94790D", fontFamily: "Cambria" }}>Form Submitted!</h2>
                } 
                </Form>
                <br></br>              
    	        </body>         
    	        </Container>               
            </React.Fragment>
        )
    }
}
export default Message