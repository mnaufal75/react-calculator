import React from 'react';

class Screen extends React.Component {
  render() {
    return <input value={this.props.screen} readOnly />;
  }
}

export default Screen;
