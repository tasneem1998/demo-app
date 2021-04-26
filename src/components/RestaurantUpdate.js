import React, { Component } from 'react'

export default class RestaurantUpdate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
            email:"",
            rating:null,
            address:"",
            // list:[],
            id: this.props.match.params.id
        }
    }
    
    componentDidMount(){
        fetch("http://localhost:3000/restaurant/"+this.state.id)
        .then(res=>res.json()
        .then(result=>
            this.setState({
                name:result.name,
                email:result.email,
                rating:result.rating,
                address:result.address,
                // list:result
            })
            // console.log(result,">>>>>>>>")
            )
        )
    }
    update=()=>{
        fetch("http://localhost:3000/restaurant/"+this.state.id,
            {
                method:"put",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(this.state)
            }
        )
        .then(result=>result.json())
        .then(res=>{
            alert("Restaurant Updated !!!")
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
        const { name, email, rating, address}=this.state
        return (
            <div>
                <h1>RestaurantUpdate</h1>
                <div>
                    <input 
                        type="text" 
                        name="name" 
                        value={name}
                        placeholder="Name"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="email" 
                        name="email" 
                        value={email}
                        placeholder="Email"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="number" 
                        name="rating" 
                        value={rating}
                        placeholder="Rating"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        name="address" 
                        value={address}
                        placeholder="Address"
                        onChange={this.handleChange}
                    />
                    <button onClick={this.update}>Update</button>
                </div>
            </div>
        )
    }
}
