import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom"
import Home from './components/Home';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import Login from "./components/Login"
import Logout from './components/Logout';
import Protected from './components/Protected';
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Route exact path="/"><Home/></Route> */}
        <Protected exact path="/" component={Home}/>
        {/* <Protected path="/detail" component={RestaurantDetail}/> */}
        <Protected path="/list" component={RestaurantList}/>
        <Protected path="/create" component={RestaurantCreate}/>
        <Protected path="/search" component={RestaurantSearch}/>
        <Protected 
          path="/update/:id"
          component={RestaurantUpdate}
        />
        <Route 
          path="/login" 
          render={props=>(
            <Login {...props}/>
          )}
        />
        <Route path="/logout"><Logout/></Route>
      </Router>
    </div>
  );
}

export default App;
