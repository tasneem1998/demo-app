import React, { Component } from 'react'
import {Table} from "react-bootstrap"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import NavBar from './NavBar'
export default class RestaurantList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: null
        }
    }
    componentDidMount() {
        this.getData();
    }
    getData = () =>{
        fetch("http://localhost:3000/restaurant").then((res) => {
            res.json().then((result) => {
                this.setState({ list: result })
            })
        });
    }

    delete = (id) =>{
        fetch("http://localhost:3000/restaurant/"+id,
        {
            method:'delete'
        })
        .then(result=>result.json())
        .then(res=>{
            alert("Restaurant will be Deleted !!!")
            this.getData()
        })
        .catch((error) => {
            console.error('Error:', error);
          });
    }
    render() {
        const { list } = this.state
        return (
            <div>
                <NavBar />
                <h1>RestaurantList</h1>
                {
                    list ?
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
                            list.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.id}.</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.rating}</td>
                                        <td>{item.address}</td>
                                        <td><Link to={`/update/${item.id}`}><FontAwesomeIcon icon={faEdit} color="orange"/></Link></td>
                                        <td><span onClick={()=>this.delete(item.id)} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faTrash} color="red"/></span></td>
                                    </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                        :
                    "Please wait...."
                }
            </div>
        )
    }
}
