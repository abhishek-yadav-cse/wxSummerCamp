import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import UploadScreen from './UploadScreen';
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
}

  handleClick(event){
 var apiBaseUrl = "http://localhost:4000/api/";
 var self = this;
 var payload={
 "email":this.state.username,
 "password":this.state.password
 }
 axios.post(apiBaseUrl+'login', payload)
 .then(function (response) {
 console.log(response);
 if(response.data.code == 200){
 console.log("Login successfull");
 var uploadScreen=[];
 uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
 self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
 }
 else if(response.data.code == 204){
 console.log("Username password do not match");
 alert("username password do not match")
 }
 else{
 console.log("Username does not exists");
 alert("Username does not exist");
 }
 })
 .catch(function (error) {
 console.log(error);
 });
 }
render() {
  const buttonStyle1 = {
    color: 'white'
  };
  const menubar= (
    <div style={{marginTop: '4px'}}>

    <FlatButton label="Menu" style={buttonStyle1} />
    <FlatButton label="Home" style={buttonStyle1} onClick={() => {this.props.history.push("");}}/>
    <FlatButton label="Posters" style={buttonStyle1} onClick={() => {this.props.history.push("forecast");}}/>
    <FlatButton label="Description" style={buttonStyle1} onClick={() => {this.props.history.push("about");}}/>
    <FlatButton label="Registration" style={buttonStyle1} onClick={() => {this.props.history.push("RadarSatellite");}}/>
    <FlatButton label="Sponsers" style={buttonStyle1} onClick={() => {this.props.history.push("about");}}/>
    <FlatButton label="Courses" style={buttonStyle1} onClick={() => {this.props.history.push("about");}}/>
    <FlatButton label="Instructors" style={buttonStyle1} onClick={() => {this.props.history.push("about");}}/>
    <FlatButton label="Organizers" style={buttonStyle1} onClick={() => {this.props.history.push("about");}}/>
    <FlatButton label="Schedule" style={buttonStyle1} onClick={() => {this.props.history.push("about");}}/>

    </div>);



  return (
    <div>
    <div className="App-header"><a href="http://www.sjsu.edu/"> San Jose State University</a>
    </div>
      <AppBar
        titleStyle={{fontSize: '20px'}}
        title=""

  iconElementLeft={menubar}
      />
      <div>
      <br></br>
      </div>
        <MuiThemeProvider>
          <div >
          <AppBar
             title="Login"
           />


           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         <RaisedButton label="Signup" primary={true} style={style} onClick={(event) => {this.props.history.push("Signup");}}/>

         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;
