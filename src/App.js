import './App.css';
import React, { Dropdown } from 'react';
import { Route, Link, Switch, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

// import Home from './Components/Home';
import MapView from './Components/MapView';
import ListView from './Components/ListView';
import { Nav, NavItem } from 'react-bootstrap';

function App() {
  return (
    <body style={{backgroundColor: '#ebeeff'}}>
      <div className="App" style={{backgroundColor: '#ebeeff'}}>
        <br></br>
        <br></br>
        
        <Navbar expand="lg"  justify variant="tabs">
          <Navbar.Brand style={{backgroundColor: '#4f64dd'}}>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" height="180px"/>
          <br></br>
            <Link to="/" style={{
              textDecoration:"none"}}>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse>
            <Nav className="mr-auto" style={{
              fontFamily: 'karla',
              fontSize: '24px',
              color: '#ebcb15'}}>
                <Link to="/" style={{
                  textDecoration: 'none',
                  marginRight: '20px'
                }}>Home</Link>
                {/* <Link to="/map" style={{
                  textDecoration: 'none'
                }}>Map</Link> */}
                <Link to="/about" style={{
                  textDecoration: 'none',
                  marginRight: '20px'
                }}>About</Link>
                <Link margin="80px" to="/list" style={{
                  textDecoration: 'none',
                  marginRight: '20px'
                }}>Directory</Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        

        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={MapView} />
          <Route path="/list" component={ListView} />
          {/* <Route path="/about" component={AboutView} /> */}
          <Route path="/about" render={() => 
          {window.location.href="./about_page.html"}} />
        </Switch>
      </div>
    </body>
  );
}

export default App;
