import React from 'react';
import { render } from 'react-dom';
import Sidebar from './sidebar.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
      <Sidebar departments={this.props.departments} />
      {this.props.children}
      </div>
    )
  }
}

export default App;