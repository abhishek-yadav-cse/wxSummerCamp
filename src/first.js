import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar} from 'material-ui/Toolbar';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Loading from './Loading';
import Config from './Config';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import login from './login';
class first extends Component{

  constructor(props) {
    super(props);


}
  render(){
    const buttonStyle = {
      color: 'white'
    };
    const buttonStyle1 = {
      color: 'black'
    };
    const menubar= (
      <div style={{marginTop: '4px'}}>

      <div class="dropdown1">
      <FlatButton label="San Jose State University" style={buttonStyle}/>

      </div>
    </div>);

      const rightButtons = (
        <div style={{marginTop: '4px'}}>
          <FlatButton label="Home" style={buttonStyle} onClick={() => {this.props.history.push("");}}/>
          <FlatButton label="Forecast" style={buttonStyle} onClick={() => {this.props.history.push("forecast");}}/>
          <FlatButton label="About" style={buttonStyle} onClick={() => {this.props.history.push("about");}}/>
          <FlatButton label="Radar SAT" style={buttonStyle} onClick={() => {this.props.history.push("RadarSatellite");}}/>
          </div>);

      return (
        <div>
          <AppBar
            titleStyle={{fontSize: '20px', textAlign: 'center'}}
            title="WRF Hydro"
            iconElementRight={rightButtons}
            iconElementLeft={menubar}

          />


 </div>

    );
  }
}
export default first;
