import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar} from 'material-ui/Toolbar';
import First from './first';
import arthur from './images/arthur_eiserloh.jpg'
import mullens from './images/Mullens Headshot.jpg'
import logo from './images/logo.png';

class About extends Component {
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
       <FlatButton label="About Us" style={buttonStyle1} onClick={() => {this.props.history.push("About");}}/>

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
<br/>
        <div class="new">
        <p style={{fontFamily: 'Impact', fontStyle: 'Normal', fontSize: '30px'}}><b>About US</b></p>
        </div>
<section id="instructors">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">

        <h3>Camp Instructors</h3>
        <br/>
        <br/>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <ul class="timeline">
          <li>
            <div class="timeline-image">
              <img src={arthur} class="img-circle" alt="Cinque Terre" width="163" height="163"/>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading" style={{fontSize: '14px', textAlign: 'left'}}>
                <h4>Arthur Eiserloh</h4>

              </div>
              <div class="timeline-body" style={{width: '85%'}}>
                <p class="text-muted"  style={{fontSize: '14px', textAlign: 'left'}}>
                "I am a lecturer and research associate in the Meteorology and Climate Science Department here at San Jose State University. I have a passion for all things weather-related since high school after having grown up in the hot and humid Southeastern Louisiana and experiencing the thrill of many Gulf Coast hurricanes and thunderstorms. I have 4 years experience teaching young college students, and I have assisted in various research projects with Dr. Sen Chiao in SJSU’s Center for Applied Atmospheric Research and Education Center. I earned my B.S. in Meteorology at the University of South Alabama and my M.S. in Meteorology from San Jose State University. I teach classes on Air Pollution, Introduction to Weather and Climate, and Introduction to Global Climate Change."
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-image">
            <img src={mullens} class="img-circle" alt="Cinque Terre" width="163" height="163"/>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading" style={{fontSize: '14px'}}>
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terrence Mullens</h4>
              </div>
              <div class="timeline-body" style={{textAlign: 'right'}}>
              <p class="text-muted" style={{fontSize: '14px', textAlign: 'right'}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 "I am a Professor and Chair of the Meteorology Department &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; at De Anza College at Cupertino, California. For as long &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;as I can remember, I've always been fascinated about &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;weather, especially "bad" weather; when most people are&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; running inside to get away from a thunderstorm, I'm the&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; one you can find going outside to see it (while staying safe, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of course)! I'm also passionate about sharing the science of Global Warming and Climate Change, and how we can leave our world a better place for the next generation. In my spare time, I love train travel, bike riding, and flying remote-controlled airplanes. I'm a weather nerd in every sense of the word!"
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-image">
              <h4>Come,
                <br/>Let's
                <br/>Learn!</h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>




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

export default About;
