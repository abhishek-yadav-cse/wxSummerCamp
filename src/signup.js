import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import FlatButton from 'material-ui/FlatButton';
import UploadScreen from './UploadScreen';
import logo from './images/logo.png';
import download from './images/download.png';
import form from './images/form.pdf';
class signup extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
  }
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
          //iconElementRight={rightButtons}
iconElementLeft={menubar}
        />
        </nav>
        <div>
        <br></br>
        </div>
        <br/>
        <div class="new">
        <p style={{fontFamily: 'Impact', fontStyle: 'Normal', fontSize: '30px'}}><b>Registration Details</b></p>
        </div>
<br/><br/>

        <div style={{width: '100%', overflow: 'hidden'}}>
            <div style={{width: '700px', float: 'left', marginLeft: '20px'}}>





            <div class="cost" style={{fontSize: '13px'}}>
            <h2><b>How Much Will it Cost?</b></h2>
            <p>Early bird registration cost(by May 20th,2018) - $400 <br/>
            Regular registration cost(by June 15th,2018) - $500
            </p>
            </div>
            <br/><br/><br/>

            <div class="cost" style={{fontSize: '13px', textAlign: 'left'}}>
            <p>
            The registration deadline for Weather Summer Camp is June 15. Early Bird Registration rates are available before May 20th. Space is limited to 20 students per 1 week session and camps will fill on a first-come, first served basis. If a 1 -week camp session  is not full late registration will be accepted at the $500  rate.
            </p>
            </div>
<br/><br/><br/>
            <div class="cost" style={{fontSize: '13px'}}>
            <h2><b>HOW DO I REGISTER?</b></h2>
            <p  style={{textAlign: 'left'}}>Step 1: Fill out Application (<a href={form} download>Application Form</a>). E-mail completed application to arthur.eiserloh@sjsu.edu. We will contact you soon after  to let you know if your child has been accepted.
            <br/>
            Step 2: Payment

            </p>
            </div>


<br/><br/><br/>
            <div class="cost" style={{fontSize: '13px'}}>
            <h2><b>HOW DO I PAY?</b></h2>
            <p>You can pay either cash, check, or credit card. If you pay by check please make the check payable to :
            <br/>
            San Jose State Research Foundation
            <br/>
            Please mail cash or check in a durable envelope to the following address:
            <br/>
            </p>
            <div class="adress" style={{textAlign: 'left', marginLeft: '250px'}}>
            <p>
            <b>
            Department of Meteorology and Climate Science, DH620<br/>
            ATTN: Arthur Eiserloh<br/>
            San Jose State University<br/>
            One Washington Square<br/>
            San Jose, CA  95192-0104<br/>
            </b>
            </p>
            </div>
            <br/>
            <br/>

            <p>
            To pay with credit card click <a href="https://commerce.cashnet.com/RFsjsu">here</a><br/>
            </p>

            <div class="adress" style={{textAlign: 'left', marginLeft: '100px'}}>
            <p>
            Directions to pay with credit card:<br/>
            1. You will need to enter in the account number  34-1505-0005<br/>
            2. You will need to enter the amount to charge to your card. (Pay $400 for Early Bird Registration)<br/>

            </p>
            </div>
            </div>



            <br/><br/><br/>
                        <div class="cost" style={{fontSize: '13px'}}>
                        <h2><b>REFUND POLICY</b></h2>
                        <p style={{textAlign: 'left'}}>
                        No refunds will be issued after May 20. All refunds issued prior to May 20 will be charged a non-refundable application fee of $100. <br/>*However,  if a 1 week session has very low enrollment ( less than 10 students) AND you are unable or unwilling to transfer your child to another week if space is available then you will get your full refund.
                        </p>

                        </div>

</div>











<div style={{marginLeft: '750px', width: '40%'}}>

<br/><br/><br/><br/><br/><br/>
<a href={form} download>
<img src={download} alt='sjsu' width='250' height='50'/>
</a>

<h4>Download the application form</h4>



             </div>


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
const style = {
  margin: 15,
};
export default signup;
