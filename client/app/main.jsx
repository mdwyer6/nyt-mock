import React from 'react';
import Sidebar from './sidebar.jsx';

class Main extends React.Component {
  render () {
  console.log(this.props);
    return (
      <div>
      <Sidebar departments={this.props.departments} />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

export default Main;