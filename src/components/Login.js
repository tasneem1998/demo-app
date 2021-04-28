import React, { Component } from 'react'
import { Container, Row, Form, Button } from 'react-bootstrap'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    login = async (e) => {
        e.preventDefault()
        await fetch("http://localhost:3000/login?q=" + this.state.email)
            .then(data => data.json())
            .then(res => {
                if(res.length>0 && res[0].password === this.state.password){
                    localStorage.setItem("login",JSON.stringify(res))
                    console.log(this.props.history.push("/list"))
                }
                else{
                    alert("Please check email & password")
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div>
                <Container>
                    <Row className="justify-content-center text-left mt-2">
                        <Form className="card p-3">
                            <h2>Login</h2>
                            <hr />
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={this.login}>
                                Submit
                            </Button>
                        </Form>
                    </Row>
                </Container>
            </div>
        )
    }
}
