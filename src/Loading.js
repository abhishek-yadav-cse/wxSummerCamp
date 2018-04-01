import React, { Component } from 'react';
import LinearProgress from 'material-ui/LinearProgress';

class Loading extends Component {
  render() {
    return (
      <LinearProgress style={{height: '2px'}} mode="indeterminate" />
    )
  }
}

export default Loading;

