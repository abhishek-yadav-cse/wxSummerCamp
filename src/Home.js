import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar} from 'material-ui/Toolbar';
import First from './first';
import Schedule from './schedule';
import { Button } from 'semantic-ui-react';
import map from './images/map.jpg';
import logo from './images/logo.png';
import homeImage from './images/home.jpg';

class Home extends Component {
  render() {
    const buttonStyle = {
      color: 'white'
    };
    const buttonStyle1 = {
      color: 'white'
    };
    const menubar= (
       <div style={{marginTop: '4px'}}>

       <FlatButton label="Home" style={buttonStyle1} onClick={() => {this.props.history.push("");}}/>
       <FlatButton label="Registration" style={buttonStyle1} onClick={() => {this.props.history.push("signup");}}/>
       <FlatButton label="Schedule" style={buttonStyle1} onClick={() => {this.props.history.push("schedule");}}/>
       <FlatButton label="FAQ" style={buttonStyle1} onClick={() => {this.props.history.push("faq");}}/>
       <FlatButton label="About Us" style={buttonStyle1} onClick={() => {this.props.history.push("about");}}/>

       </div>);

       const head=(
         <div style={{marginTop: '0px'}}>
         {
           <img src={logo} alt='sjsu' width='260' height='70'/>
       /*<FlatButton href="http://www.sjsu.edu" backgroundColor="fullBlack" label="SAN JOSE STATE UNIVERSITY" style={buttonStyle} />*/
       }
       </div>
 );
    const rightButtons = (
      <div style={{marginTop: '4px'}}>
<div class="glyphicon glyphicon-log-in">
        <FlatButton label="Login" style={buttonStyle} onClick={() => {this.props.history.push("login");}}/>
        </div>
<div class="glyphicon glyphicon-user">
<FlatButton label="Register" style={buttonStyle} onClick={() => {this.props.history.push("signup");}}/>

      </div>
      </div>
    );

    return (
      <div>
      <nav>

      <AppBar
      titleStyle={{fontSize: '20px'}}
      title=""
      iconElementLeft={head}
/>
        <AppBar
          titleStyle={{fontSize: '20px'}}
          title=""
        //  iconElementRight={rightButtons}
iconElementLeft={menubar}
        />
        </nav>
<br/>

<div className="new">
<p style={{fontFamily: 'Impact', fontStyle: 'Normal', fontSize: '30px'}}><b>San Jose State<br/> Weather Summer Camp</b></p>
</div>
<div>
  <img src={homeImage} alt='sjsu' height='300' width='320'/>
</div>

<br></br>
<br></br>
<button type="button" class="btn btn-info btn-lg" style={buttonStyle1} onClick={() => {this.props.history.push("signup");}}>
SIGN UP NOW! SEATS ARE GOING FAST</button>
<div class="alert alert-info">
   Limited seats available.
</div>

<br/>
<br/>
<br/><br/><br/>
<center>
<div class="intro" style={{fontSize: '15px', width: '1100px'}}>
<h2><b>What is this SJSU Weather Camp?</b></h2>
<p>
The SJSU Weather Summer Camp is a 1-week daytime summer science camp offered for 3 weeks during the summer designed for middle school students in the Bay Area. It is designed to teach middle school students about the science of the atmosphere and meteorology  through fun demonstrations, experiments, hands-on activities, and exciting fieldtrips.
</p>
</div>


<br/><br/>
<div class="goals" style={{fontSize: '15px',  width: '1100px'}}>
<h2><b>What are our GOALS?</b></h2>
<p>

<ul style={{type: 'disc', textAlign: 'left'}}>
  <li>To help Silicon Valley middle school kids develop an early connection and more in-depth appreciation of their surrounding local atmosphere and daily weather patterns.
</li>
  <li>To give them more confidence in knowing weather situations for outdoor activities.
</li>
  <li>To  teach them fundamental weather concepts of the atmosphere and weather forecasting in a fun and exciting way via making independent weather observations, using weather instruments, and giving them weather forecasting skills early on to make them a more well-rounded person for their future.
</li>
<li>
To encourage them to consider a science career in Meteorology, Atmospheric Sciences, or Earth Science through fun, first-hand exposure to educational and career opportunities in atmospheric sciences.
</li>
</ul>



</p>
</div>
</center>





<section id="about">
<div class="container">
  <div class="row">
    <div class="col-lg-12 text-center">
      <h2><b>The four W s</b></h2>
    </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <ul class="timeline">
          <li>
            <div class="timeline-panel">
              <div class="timeline-heading"  style={{fontSize: '14px', textAlign: 'center'}}>
                <h2>Who?</h2>
              </div>
              <div class="timeline-body">
                <p class="text-muted" style={{fontSize: '14px', textAlign: 'center'}}>Middle School Students (going into Grades 6-8)
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-panel">
              <div class="timeline-heading"  style={{fontSize: '14px', textAlign: 'center'}}>
                <h2>What ?</h2>
              </div>
              <div class="timeline-body">
                <p class="text-muted" style={{fontSize: '14px', textAlign: 'center'}}>A 1-week Immersive and Interactive Weather Science Camp filled with demonstrations,   hands-on activities, and 1 field trip.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="timeline-panel">
              <div class="timeline-heading"  style={{fontSize: '14px', textAlign: 'center'}}>
                <h2>When ?</h2>
              </div>
              <div class="timeline-body">
              <p class="text-muted" style={{fontSize: '14px', textAlign: 'left'}}>We offer three 1-week camps  for parents to choose from:<br/>
              <u>Schedule for 2018:</u><br/>
              <br/>Week 1)&nbsp;&nbsp;&nbsp;June 25 - 29&nbsp;&nbsp;&nbsp;&nbsp;<br/>
              Week 2)&nbsp;&nbsp;&nbsp;July 9 - 13<br/>
              Week 3)&nbsp;&nbsp;&nbsp;July 23 - 27<br/><br/><br/>
              Monday – Friday, 9 am – 3 pm
              </p>              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-panel">
              <div class="timeline-heading"  style={{fontSize: '14px', textAlign: 'center'}}>
                <h2>Where ?</h2>
              </div>
              <div class="timeline-body">
                <p class="text-muted" style={{fontSize: '14px', textAlign: 'center'}}>
                San Jose State University, Main Campus, Duncan Hall. </p>
                <center>
                <div>
                 <a href = "https://goo.gl/maps/YCG7rC5U6SS2">
                  <img src={map} alt='sjsu' height='250' width='300'/>
                  </a>
                </div>
                </center>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-image" style={{backgroundColor: '#1CA5BE'}}>
              <h4>Be Part
                <br/>Of Our
                <br/>Story!</h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>



<br/>
<div class="cost" style={{fontSize: '15px'}}>
<h2><b>How much will it cost?</b></h2>
<p>Early bird registration cost(by May 20th,2018) - $400 <br/>
Regular registration cost(by June 15th,2018) - $500
</p>
<button type="button" class="btn btn-info btn-lg" style={buttonStyle1} onClick={() => {this.props.history.push("signup");}}>
SIGN UP NOW! SEATS ARE GOING FAST</button>
</div>

<br/><br/><br/>
<div class="lunch" style={{fontSize: '15px'}}>
<h2><b>Will lunch be provided?</b></h2>
<p>Lunch will be provided only on the last day for lunch (pizza). Mondays-Thursdays students need to bring a packed lunch to camp.
</p>
</div>

<br/><br/><br/><br/><br/><br/>
<div class="activities" style={{fontSize: '15px'}}>
<h2><b>Included Activities</b></h2>
Help release and watch a real weather balloon instrument<br/>
Hands-on measurements of real-time weather variables<br/>
Demonstrations and Experiments describing the physics and properties of the atmosphere<br/>
Recording the daily weather forecast on a broadcasting green screen<br/>
Meeting real weather forecasters<br/>
Meeting local Broadcast Meteorologists<br/>
Cloud identification an observation<br/>
Setting up a remote Weather Station<br/>
Learning how to read and draw real weather maps<br/>
Climate experiments<br/>
Touring the National Weather Service<br/>
</div>


<br/><br/><br/>
<div class="career" style={{fontSize: '15px'}}>
<h2><b>What are some related meteorology careers?
</b></h2>
Weather forecaster<br/>
Broadcast meteorologist<br/>
Research meteorologist<br/>
Science teacher<br/>
Applied climatologist<br/>
Air quality forecaster<br/>
Data analyst<br/>
Website development<br/>
</div>

<br/><br/><br/><br/><br/><br/><br/><br/><br/>

<hr/>
<div>
<h6>San Jose State University Department of Meteorology, Duncan Hall 620 <br></br>
Phone: 408.924.1226(Office) Email: arthur.eiserloh@sjsu.edu</h6>
</div>



      </div>
    );
  }
}

export default Home;
