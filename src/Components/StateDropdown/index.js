import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const StateDropdown = () => {

    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default StateDropdown;