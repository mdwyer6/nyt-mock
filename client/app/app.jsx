import React from 'react';
import { render } from 'react-dom';
import Sidebar from './sidebar.jsx';

class App extends React.Component {
  render () {
  	var departments = ['ADVERTISING',
		'BUSINESS FUNCTIONS',
		'COMMERCIAL OPERATIONS',
		'DATA & INSIGHTS',
		'DESIGN',
		'EDITORIAL',
		'FINANCE',
		'INTERNATIONAL MEDIA CONCEPTS',
		'INTERNATIONAL OPPORTUNITIES',
		'INVESTOR RELATIONS'];
    return (
      <div>
      <p>Hello</p>
      <Sidebar departments={departments} />
      </div>
    )
  }
}

module.exports = App;