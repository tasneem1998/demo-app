import React, { Component } from 'react'
import { Navbar, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom"

export default class NavBar extends Component {
    render() {
        return (
            <div>

                <Navbar bg="light">
                    <Navbar.Brand>Resto</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><NavLink to="/"><FontAwesomeIcon icon={faHome} />Home</NavLink></Nav.Link>
                            {/* <Nav.Link><NavLink to="/detail"><FontAwesomeIcon icon={}/>Detail</NavLink></Nav.Link> */}
                            <Nav.Link><NavLink to="/list"><FontAwesomeIcon icon={faList} />List</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/create"><FontAwesomeIcon icon={faPlus} />Create</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/search"><FontAwesomeIcon icon={faSearch} />Search</NavLink></Nav.Link>
                            {/* <Nav.Link><NavLink to="/update"><FontAwesomeIcon icon={faEdit}/>Update</NavLink></Nav.Link> */}
                            {
                                localStorage.getItem("login")
                                    ?
                                    <Nav.Link><NavLink to="/logout"><FontAwesomeIcon icon={faUser} />Logout</NavLink></Nav.Link>
                                    :

                                    <Nav.Link><NavLink to="/login"><FontAwesomeIcon icon={faUser} />Login</NavLink></Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
