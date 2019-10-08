import React from 'react';
import './Screen.css'

class Screen extends React.Component {
  render() {
    return <input id="screen" value={this.props.screen} readOnly />;
  }
}

export default Screen;
