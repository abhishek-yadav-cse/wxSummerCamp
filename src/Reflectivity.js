import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class Reflectivity extends Component {
  render() {
    return (
      <div>
        <AppBar
          titleStyle={{fontSize: '20px'}}
          title="SJSU | Meteorology and Climate Science"
        />
        <div>
          <div id="outerdiv" style={{width: '250px', position: 'relative'}}>
            <div id="innerdiv" style={{position: 'absolute', left: '-166px', top: '-166px', clip: 'rect(0px 760px 873px 0px)'}}>      
              <iframe width="900" height="900" src="https://radar.weather.gov/radar.php?rid=MUX&product=NCR&overlay=11101111&loop=yes" scrolling="no" frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reflectivity;

