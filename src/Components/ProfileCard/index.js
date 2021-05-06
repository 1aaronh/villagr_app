import React, { Component } from 'react';
import { Card as Base } from '@material-ui/core';
import PropTypes from 'prop-types';
import NeedLevel from './needLevel.js'
import './index.css'

class ProfileCard extends Component {

  render() {

    return (
      <Base className={'card'} style={{ backgroundColor:  "#fff9eb"}}>
      {/* <img className = 'business-image' src={`${process.env.PUBLIC_URL}/images/placeholder.jpg`} alt='placeholder'/> */}
      <div >
        <div className='cardHeader'>{this.props.business_name}</div>
        <div className='cardBody'>
          <div>{this.props.street_address},</div>
          <div>{this.props.city}, {this.props.state} {this.props.zip_code_first5}</div>
          {/* Urgency feature can be adjusted for city or state: Default is by state here:*/}
          <br/>
          <div style={{color: "#4872A1"}}><b>Your Impact and Contribution:</b></div>
          <div><b>{this.props.loan_size_urgency}</b></div>
          <br/>
          <a style={{fontWeight: '400'}} href={`https://www.google.com/maps/search/?api=1&query=${this.props.lat},${this.props.lng}`}>Get Directions on Google Maps</a>
          <div className = 'need-indicator'>
          <NeedLevel loan_size_rank_by_state = {this.props.loan_size_rank_by_state} />
          </div>
        </div>
      </div>
      </Base>

    );
  }

}

ProfileCard.propTypes = {
  business_name: PropTypes.string,
  street_address: PropTypes.string,

}

export default ProfileCard;
