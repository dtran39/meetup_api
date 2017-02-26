import React from 'react';
import { NavLink } from 'react-router-dom';

import LoginButtons from './LoginButtons.jsx';

export default class Header extends React.Component {
  render() {
    return (
      <header className='Header'>
        <b>Header</b> &nbsp;
        <NavLink activeClassName="active" exact to="/">List</NavLink>
        <NavLink activeClassName="active" to="/about">GoogleMaps</NavLink>
        <NavLink to="/bad-url">Not Found Page</NavLink>
        <LoginButtons align='left' />
      </header>
    );
  }
}
