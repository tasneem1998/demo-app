import './App.css';
import {BrowserRouter as Router, Link, Route } from "react-router-dom"
import Home from './components/Home';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="/create">Create</Link></li>
            <li><Link to="/detail">Detail</Link></li>
            <li><Link to="/list">List</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/update">Update</Link></li>
          </ul>
        </nav>
        <Route exact path="/"><Home/></Route>
        <Route path="/create"><RestaurantCreate/></Route>
        <Route path="/detail"><RestaurantDetail/></Route>
        <Route path="/list"><RestaurantList/></Route>
        <Route path="/search"><RestaurantSearch/></Route>
        <Route path="/update"><RestaurantUpdate/></Route>

      </Router>
    </div>
  );
}

export default App;
