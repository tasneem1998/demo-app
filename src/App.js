import './App.css';
import {BrowserRouter as Router, Link, Route } from "react-router-dom"
import Home from './components/Home';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import {Navbar, Nav} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light">
          <Navbar.Brand>Resto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to="/"><FontAwesomeIcon icon={faHome}/>Home</Link></Nav.Link>
              {/* <Nav.Link><Link to="/detail"><FontAwesomeIcon icon={}/>Detail</Link></Nav.Link> */}
              <Nav.Link><Link to="/list"><FontAwesomeIcon icon={faList}/>List</Link></Nav.Link>
              <Nav.Link><Link to="/create"><FontAwesomeIcon icon={faPlus}/>Create</Link></Nav.Link>
              <Nav.Link><Link to="/search"><FontAwesomeIcon icon={faSearch}/>Search</Link></Nav.Link>
              {/* <Nav.Link><Link to="/update"><FontAwesomeIcon icon={faEdit}/>Update</Link></Nav.Link> */}
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        <Route exact path="/"><Home/></Route>
        <Route path="/detail"><RestaurantDetail/></Route>
        <Route path="/list"><RestaurantList/></Route>
        <Route path="/create"><RestaurantCreate/></Route>
        <Route path="/search"><RestaurantSearch/></Route>
        <Route 
          path="/update/:id"
          render={props=>(<RestaurantUpdate {...props}/>)}
        ></Route>

      </Router>
    </div>
  );
}

export default App;
