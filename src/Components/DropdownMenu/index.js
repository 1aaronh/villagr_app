import React, { Component, Dropdown } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
// import PropTypes from 'prop-types';
import './index.css'

// class StateFilter extends Component {

function NavDropdownExample() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" href="#/home">
          NavLink 1 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          NavLink 2 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          NavLink 3 content
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

render(<NavDropdownExample />)


export default (StateFilter);

// Alternate Test

// class PlanetSearch extends Component {
//   constructor() {
//       super();
//       this.state = {
//           planets: [],
//       };
//   }
// }

// componentDidMount() {
//   let initialPlanets = [];
//   fetch('https://swapi.co/api/planets/')
//       .then(response => {
//           return response.json();
//       }).then(data => {
//       initialPlanets = data.results.map((planet) => {
//           return planet
//       });
//       console.log(initialPlanets);
//       this.setState({
//           planets: initialPlanets,
//       });
//   });
// }

// render() {
//   return (
//               <Planet state={this.state}/>
//   );
// }

// after component is finished

export default PlanetSearch;

ReactDOM.render(<PlanetSearch />, document.getElementById('react-search'));

// Another template

<div>
  {['clientName', 'siteName', 'segmentName'].map(key => (
    <select key={key}>
      {this.state.data.map(({ [key]: value }) => <option key={value}>{value}</option>)}
    </select>
  ))}
</div>