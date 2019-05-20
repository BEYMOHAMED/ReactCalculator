import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class PasCalculator extends Component {
  render() {
    return (
      <div>
        je ne suis pas Calculator
        <NavLink 
        to={'../App'}>go to calculator</NavLink>
      </div>
    )
  }
}
