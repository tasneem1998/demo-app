import React, { Component } from 'react'
import { Container, InputGroup, FormControl, Table } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import NavBar from './NavBar'

export default class RestaurantSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchData: null,
            noData: false,
            lastSearch: ""
        }
    }
    search = (key) => {
        this.setState({ lastSearch: key })
        fetch("http://localhost:3000/restaurant?q=" + key).then((res) => {
            res.json().then((result) => {
                result.length > 0 ? this.setState({ searchData: result, noData: false }) : this.setState({ noData: true, searchData: null })
            })
        });
    }

    delete = (id) => {
        fetch("http://localhost:3000/restaurant/" + id,
            {
                method: 'delete'
            })
            .then(result => result.json())
            .then(res => {
                alert("Restaurant will be Deleted !!!")
                this.search(this.state.lastSearch)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    render() {
        const { searchData, noData } = this.state
        return (
            <div>
                <NavBar />
                <h1>RestaurantSearch</h1>
                {
                    <Container>

                        <InputGroup className="mb-3 mx-auto">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => this.search(e.target.value)} />
                            
                        </InputGroup>
                        {searchData ?
                            <div>
                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Rating</th>
                                            <th>Address</th>
                                            <th colSpan={2}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            searchData.map((item, i) => (
                                                <tr key={i}>
                                                    <td>{item.id}.</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.rating}</td>
                                                    <td>{item.address}</td>
                                                    <td><Link to={`/update/${item.id}`}><FontAwesomeIcon icon={faEdit} color="orange" /></Link></td>
                                                    <td><span onClick={() => this.delete(item.id)} style={{ cursor: "pointer" }}><FontAwesomeIcon icon={faTrash} color="red" /></span></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </div>
                            :
                            <div>{noData && "No Restaurant"}</div>
                        }
                    </Container>

                }
            </div>
        )
    }
}
