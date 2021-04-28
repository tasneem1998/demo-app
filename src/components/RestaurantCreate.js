import React, { Component } from 'react'
import NavBar from './NavBar'

export default class RestaurantCreate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
            email:"",
            rating:null,
            address:""
        }
    }
    create=()=>{
        fetch("http://localhost:3000/restaurant",
            {
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(this.state)
            }
        )
        .then(result=>result.json())
        .then(res=>{
            alert("Restaurant Added !!!")
        })
        .catch((error) => {
            console.error('Error:', error);
          });
    }
    handleChange=e=>{
        const {name, value}=e.target
        this.setState({[name]:value})
    }
    render() {
        return (
            <div>
                <NavBar />
                <h1>RestaurantCreate</h1>
                <div>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="number" 
                        name="rating" 
                        placeholder="Rating"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        name="address" 
                        placeholder="Address"
                        onChange={this.handleChange}
                    />
                    <button onClick={this.create}>Add</button>
                </div>
            </div>
        )
    }
}
