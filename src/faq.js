import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar} from 'material-ui/Toolbar';
import First from './first';
import faq from './images/faq.jpg';
import logo from './images/logo.png';
import './App.css';
class FAQ extends Component {
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
                <br/>

        <div class="new">
        <p style={{fontFamily: 'Impact', fontStyle: 'Normal', fontSize: '30px'}}><b>FAQ</b></p>
        </div>

          <div>
            <img src={faq} alt='sjsu' height='100' width='300'/>
          </div>

          <div class="container">
    <br />
    <br />
    <br />

    <div class="alert alert-warning alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        This section contains a wealth of information, related to <strong>SJSU Weather Summer Camp</strong> and its activities. If you cannot find an answer to your question,
        make sure to contact us.
    </div>

    <br />
          <div class="panel-group" id="accordion">
        <div class="faqHeader">General Questions</div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" >How much will it Cost?</a>
                </h4>
            </div>
            <div id="collapseOne" class="panel-collapse collapse in">
                <div class="panel-body">
                    The cost will be as follows:<br/>
                    <p>Early bird registration cost(by May 20th,2018) - $400 <br/>
                    Regular registration cost(by June 15th,2018) - $500
                    </p>

                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" >Do we offer carpooling service?</a>
                </h4>
            </div>
            <div id="collapseTen" class="panel-collapse collapse in">
                <div class="panel-body">
                    NO, Parents must find a way to drop off their child and pick them up.
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">Is there an aftercare service offered?</a>
                </h4>
            </div>
            <div id="collapseEleven" class="panel-collapse collapse in">
                <div class="panel-body">
                YES! from 3-6 pm. $25/hour and $2/min after 6 pm.

                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">Does my child need to have any prior training or knowledge before sending them to this camp?</a>
                </h4>
            </div>
            <div id="collapseEleven" class="panel-collapse collapse in">
                <div class="panel-body">
              NO
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">Does my child need to have any prior training or knowledge before sending them to this camp?</a>
                </h4>
            </div>
            <div id="collapseEleven" class="panel-collapse collapse in">
                <div class="panel-body">
              NO
                </div>
            </div>
        </div><div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">Will each week be the same in terms of activities and field trips?
</a>
                </h4>
            </div>
            <div id="collapseEleven" class="panel-collapse collapse in">
                <div class="panel-body">
            For the activities, the schedule is the same. However, the field trips will be somewhere different each week due to the limited number of staff at the field trip destinations. For example, one week will be the weather forecasting field trip to the National Weather Service Monterey and the next week offered will to the National Weather Service Sacramento, OR , a CAL Fire office.
                </div>
            </div>
        </div><div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">Will lunch be provided? </a>
                </h4>
            </div>
            <div id="collapseEleven" class="panel-collapse collapse in">
                <div class="panel-body">
                Lunch will only be provided on Friday, the last day. All the rest of the days, the student will need to bring and pack their lunch.

                </div>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">Who are the instructors? </a>
                </h4>
            </div>
            <div id="collapseEleven" class="panel-collapse collapse in">
                <div class="panel-body">
              The lead instructors for this camp are
              <br/>
              i. Arthur Eiserloh, SJSU Meteorology Department (lecturer and research associate) .
              <br/>
              ii. Terrence Mullens, De Anza Meteorology Department lecturer and chair.
                </div>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">What if a camp needs to be cancelled due to low enrollment? </a>
                </h4>
            </div>
            <div id="collapseEleven" class="panel-collapse collapse in">
                <div class="panel-body">
We will provide a full refund of the registration  or allow a transfer to another week if space is available and you are flexible to change dates.
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">What is your refund/cancellation policy?</a>
                </h4>
            </div>
            <div id="collapseEleven" class="panel-collapse collapse in">
                <div class="panel-body">
                We may cancel programs if a minimum enrollment (10) has not been achieved the week before the camp occurs. In the event that a week is cancelled, all enrollment fees will be returned.
                </div>
            </div>
        </div>


    </div>



    <br/><br/><br/><br/><br/><br/><br/><br/><br/>

    <hr/>
    <div>
    <h6>San Jose State University Department of Meteorology, Duncan Hall 620 <br></br>
    Phone: 408.924.1226(Office) Email: arthur.eiserloh@sjsu.edu</h6>
    </div>
</div>
</div>


    );
  }
}

export default FAQ;
