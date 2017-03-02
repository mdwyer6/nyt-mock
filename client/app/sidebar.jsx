import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router';
//import Searchbar from './searchbar';

class Sidebar extends React.Component {
  render () {
  	return (
      <div className="sidebar">
        <img src="https://static01.nyt.com/images/nytco/sidebar-logo.png" alt="New York Times Logo" />
        <ul className="departments">
          {this.props.departments.map(function(arg, index) {
            return (<li key={index}><Link to={arg.toLowerCase().replace(/ /g,"_")}>{arg}</Link></li>);
          })}
        </ul>
      </div>
    )
  }
}

module.exports = Sidebar;