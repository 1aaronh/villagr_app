import Map from '../Map';
import React, { Dropdown } from 'react';
import Checkbox from '@material-ui/core/Checkbox';


const MapView = () => {

  const [minorChecked, setMinorChecked] = React.useState(true);
  const [moderateChecked, setModerateChecked] = React.useState(true);
  const [seriousChecked, setSeriousChecked] = React.useState(true);
  const [criticalChecked, setCriticalChecked] = React.useState(true);

  const handleMinorChange = (event) => {
    setMinorChecked(event.target.checked)
  }
  const handleModerateChange = (event) => {
    setModerateChecked(event.target.checked)
  }
  const handleSeriousChange = (event) => {
    setSeriousChecked(event.target.checked)
  }
  const handleCriticalChange = (event) => {
    setCriticalChecked(event.target.checked)
  }


    return(
      <div>

        <Map 
          minorChecked={minorChecked} 
          moderateChecked={moderateChecked} 
          seriousChecked={seriousChecked} 
          criticalChecked={criticalChecked}
        />
        <p>Become your Village Hero | Shop Where it Helps the Most for Pandemic Recovery</p>
        <p>In your Community or Anywhere</p>
        <p>Search by State | Filter by Need</p>
        <p>View the Scale of Your Impact Below</p>
        <div style={{display: 'flex', flexWrap: 'wrap', maxWidth: '100vw', marginBottom: 20, justifyContent: 'center'}}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Checkbox 
              checked={minorChecked} 
              onChange={handleMinorChange} 
              color="default"
              inputProps={{ 'aria-label' : 'secondary checkbox'}}
            />
            <p>Minor Impact</p>
            <img style={{width: 40, height: 50}} src="https://res.cloudinary.com/bitingrent/image/upload/v1616616185/service-one/Minor_Need_m0lnc5.png" alt=""/>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Checkbox 
              checked={moderateChecked} 
              onChange={handleModerateChange} 
              color="default"
              inputProps={{ 'aria-label' : 'secondary checkbox'}}
            />
            <p>Moderate Impact</p>
            <img style={{width: 40, height: 50}} src="https://res.cloudinary.com/bitingrent/image/upload/v1616616185/service-one/Moderate_Need_lhwil8.png" alt=""/>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Checkbox 
              checked={seriousChecked} 
              onChange={handleSeriousChange} 
              color="default"
              inputProps={{ 'aria-label' : 'secondary checkbox'}}
            />
            <p>Serious Impact</p>
            <img style={{width: 40, height: 50}} src="https://res.cloudinary.com/bitingrent/image/upload/v1616616185/service-one/Serious_Need_kzcveb.png" alt=""/>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Checkbox 
              checked={criticalChecked} 
              onChange={handleCriticalChange} 
              color="default"
              inputProps={{ 'aria-label' : 'secondary checkbox'}}
            />
            <p>Critical Impact</p>
            <img style={{width: 40, height: 50}} src="https://res.cloudinary.com/bitingrent/image/upload/v1616616185/service-one/Critical_Need_csmdmo.png" alt=""/>
          </div>

{/* Dropdown menu Test: */}

          {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Search by State
              </Dropdown.Toggle>
            
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">AK</Dropdown.Item>
                <Dropdown.Item href="#/action-2">AL</Dropdown.Item>
                <Dropdown.Item href="#/action-3">FL</Dropdown.Item>
                <Dropdown.Item href="#/action-3">FL</Dropdown.Item>
                <Dropdown.Item href="#/action-3">FL</Dropdown.Item>
                <Dropdown.Item href="#/action-3">FL</Dropdown.Item>
                <Dropdown.Item href="#/action-3">FL</Dropdown.Item>
                <Dropdown.Item href="#/action-3">FL</Dropdown.Item>
                <Dropdown.Item href="#/action-3">FL</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div> */}
        </div>
      </div>
);};

export default MapView;