import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar} from 'material-ui/Toolbar';
import First from './first';
import BootstrapTable from 'react-bootstrap-table-next';
import logo from './images/logo.png';
class Schedule extends Component {

  render() {
  /*  const products = [{
      id: 1,
      timing: "9:00-9:30",
      activity:"Welcoming Introductions, weather variables, terminology talk"

    },{
      id: 2,
    timing:"9:30 - 10:00",
    activity:"Tracing Sun’s shadow and direction, Evaporation exercise (leave  pan of water out for later)"
    },{
      id: 2,
    timing:"9:30 - 10:00",
    activity:"Tracing Sun’s shadow and direction, Evaporation exercise (leave  pan of water out for later)"
    },{
      id: 3,
    timing:" 10:00-10:45",
    activity:"Getting campers outside to describe the weather that they see and observe. Discuss daily temperature changes. Discuss clouds and winds."
    },{
      id: 4,
    timing:"10:45-11:00",
    activity:"Break"
    },{
      id: 5,
    timing:"11:00-12:00",
    activity:"atmospheric pressure changes and temperature demonstrations: 1. Egg in jar demo, 2. Soda can heating crushing demo. 3. Wind flow and pressure demo"
    },{
      id: 6,
    timing:"11:30 - 12:00",
    activity:"Review concepts"
    },{
      id: 7,
    timing:"12:00 - 12:45",
    activity:"Lunch"},{
      id: 8,
    timing:"12:45 - 2:00",
    activity:"Thermometer activity: Hand-held weather instrument activity observe weather changes in different areas on campus"  },{
      id: 9,
    timing:"2:30 - 2:15",
    activity:"Global Warming and CO2 activity: CO2 in a jar."},{
      id: 10,
    timing:"2:30 - 3:00",
    activity:"Go back to pan of water and talk about evaporation. Go back to shadow trace and observe changes"  }];


    const columns = [{
    dataField: 'id',
    text: 'Product ID'
    }, {
    dataField: 'timing',
    text: 'Timing'
    }, {
    dataField: 'activity',
    text: 'Activity'
    }];
    const TableRow = ({row}) => (
    <tr>
      <td key={row.timing}>{row.timing}</td>
      <td key={row.id}>{row.id}</td>
      <td key={row.activity}>{row.activity}</td>
    </tr>
  )

  const Table = ({data}) = (
    <table>
      {data.map(row => {
        <TableRow row={row} />
      })}
    </table>
*/
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
          //iconElementRight={rightButtons}
          iconElementLeft={menubar}
        />
        </nav>
        <br/><br/>
<div class="new">
<p style={{fontFamily: 'Impact', fontStyle: 'Normal', fontSize: '30px'}}><b>Tentative Schedule</b></p>
</div>
{/*<BootstrapTable keyField='id' data={ products } columns={ columns } printable bodyStyle={{overflow: 'overlay'}} height='200px'  hover/>

  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Timing</TableHeaderColumn>
        <TableHeaderColumn>Activity</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>9:00-9:30</TableRowColumn>
        <TableRowColumn>Welcoming Introductions, weather variables, terminology talk</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>9:30 - 10:00</TableRowColumn>
        <TableRowColumn>
        Tracing Sun’s shadow and direction, Evaporation exercise (leave  pan of water out for later)</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Stephanie Sanders</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>5</TableRowColumn>
        <TableRowColumn>Christopher Nolan</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>*/}
  <div class="col-md-8 col-md-offset-2">
  <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em' }}>MONDAY</h3>
  <h3 style={{ textAlign: 'center', color: 'purple', padding: '0.5em' }}>Theme: Observing the Weather, Main Weather Variables
  </h3></div>
  <div class="col-md-10 col-md-offset-1">

  <table class="table table-hover table-striped" style={{fontSize:'1.25em'}}>
<thead class="thead-dark">
    <tr>
      <th scope="col">Timing</th>
      <th scope="col">Activity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>9:00-9:30</td>
      <td>Welcoming Introductions, weather variables, terminology talk</td>
    </tr>
    <tr>
      <td>9:30 - 10:00</td>
      <td>Tracing Sun’s shadow and direction, Evaporation exercise (leave  pan of water out for later)</td>

    </tr>
    <tr>
      <td>10:00-10:45</td>
      <td>Getting campers outside to describe the weather that they see and observe. Discuss daily temperature changes. Discuss clouds and winds.
</td>
     </tr><tr>
       <td>10:45-11:00</td>
       <td>Break
 </td>
      </tr><tr>
        <td>11:00-12:00</td>
        <td>Atmospheric pressure changes and temperature demonstrations: 1. Egg in jar demo, 2. Soda can heating crushing demo. 3. Wind flow and pressure demo</td>
       </tr><tr>
         <td>11:30 - 12:00</td>
         <td>Review concepts </td>
        </tr><tr>
          <td>12:00 - 12:45</td>
          <td>Lunch</td>
         </tr><tr>
           <td>12:45 - 2:00</td>
           <td>Thermometer activity: Hand-held weather instrument activity observe weather changes in different areas on campus   </td>
          </tr><tr>
            <td>2:30 - 2:15</td>
            <td>Global Warming and CO2 activity: CO2 in a jar.  </td>
           </tr><tr>
             <td>2:30 - 3:00</td>
             <td>Go back to pan of water and talk about evaporation. Go back to shadow trace and observe changes</td>
            </tr>
  </tbody>
</table>
</div>

<div class="col-md-8 col-md-offset-2" style={{marginTop: '50px'}}>
<h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em' }}>TUESDAY</h3>
<h3 style={{ textAlign: 'center', color: 'purple', padding: '0.5em' }}>Theme: The vertical structure of the atmosphere, pressure, density experiments
<br></br>Major Activity: Weather balloon launch
</h3>
</div>
<div class="col-md-10 col-md-offset-1">

<table class="table table-hover table-striped" style={{fontSize:'1.25em'}}>
<thead class="thead-dark">
  <tr>
    <th scope="col">Timing</th>
    <th scope="col">Activity</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>9:00-9:30</td>
    <td>Vertical structure of the Atmosphere, weather balloons<br></br>
-Different layers of the atmosphere
</td>
  </tr>
  <tr>
    <td>9:30 - 10:30</td>
    <td>Activity #1: Stability of different layered fluids with different densities.</td>

  </tr>
  <tr>
    <td>10:30-10:45</td>
    <td>Weather observation break

</td>
   </tr><tr>
     <td>10:45-11:30</td>
     <td>
Activity #2: creating clouds in a bottle, review condensation. Review different Cloud Types.


</td>
    </tr><tr>
      <td>
11:30-12:30
</td>
      <td>Lunch</td>
     </tr><tr>
       <td>12:30-12:45</td>
       <td>Radiosonde set-up demonstration </td>
      </tr><tr>
        <td>
12:45-1:00
</td>
        <td>Call-airport, release weather balloon</td>
       </tr><tr>
         <td>1:00-3:00</td>
         <td>
Watch balloon go up on screen? (either outside or inside? It doesn’t plot with skewt) ...Review concepts
  </td>
        </tr>
</tbody>
</table>
</div>
<div class="col-md-8 col-md-offset-2" style={{marginTop: '50px'}}>
<h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em' }}>WEDNESDAY</h3>
<h3 style={{ textAlign: 'center', color: 'purple', padding: '0.5em' }}>Theme: TV Broadcast Meteorology
</h3>
</div>
<div class="col-md-10 col-md-offset-1">

<table class="table table-hover table-striped" style={{fontSize:'1.25em'}}>
<thead class="thead-dark">
  <tr>
    <th scope="col">Timing</th>
    <th scope="col">Activity</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>9:00-9:30</td>
    <td>
Discuss different types of meteorologists.
Broadcasting Meteorology Introductions

</td>
  </tr>
  <tr>
    <td>9:30 - 10:30</td>
    <td>Communication skills activity: “Table Topics”
Campers will have 1 minute to talk about a specific topic.
</td>

  </tr>
  <tr>
    <td>10:30-10:45</td>
    <td>Weather observation break

</td>
   </tr><tr>
     <td>10:45-11:45</td>
     <td>
         Communication skills activity 2: summarizing the weather story/forecast into 1 minute.
</td>
    </tr><tr>
      <td>
          11:45 - 12:45
</td>
      <td>Lunch</td>
     </tr><tr>
       <td>12:45 - 3:00</td>
       <td>Campers get to practice forecasting the weather  on a green screen and do short takes/videos of themselves forecasting the weather.</td>
      </tr>
</tbody>
</table>
</div>
<div class="col-md-8 col-md-offset-2" style={{marginTop: '50px'}}>
<h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em' }}>THURSDAY</h3>
<h3 style={{ textAlign: 'center', color: 'purple', padding: '0.5em' }}>Theme: Weather forecasting and being a forecast meteorologist
<br></br>Major Activity: Field Trip to the National Weather Service Office in Monterey, CA

</h3>
</div>
<div class="col-md-10 col-md-offset-1">

<table class="table table-hover table-striped" style={{fontSize:'1.25em'}}>
<thead class="thead-dark">
  <tr>
    <th scope="col">Timing</th>
    <th scope="col">Activity</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>9:00-9:30</td>
    <td>
Short intro about weather forecasting and HPCs.
</td>
  </tr>
  <tr>
    <td>
9:30-11:00
</td>
    <td>
Trip to the National Weather Service
</td>

  </tr>
  <tr>
    <td>11:00-12:30</td>
    <td>Take  tour of National Weather Service (Monterey or Sacramento, CA), NWS meteorologist gives talks to students about the job of a forecaster meteorologist.


</td>
   </tr><tr>
     <td>12:30-1:30</td>
     <td>
         Lunch
</td>
    </tr><tr>
      <td>
        1:30-3:00
</td>
      <td>
Head back to SJSU
</td>
     </tr>
</tbody>
</table>
</div>

<div class="col-md-8 col-md-offset-2" style={{marginTop: '50px'}}>
<h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em' }}>FRIDAY</h3>
<h3 style={{ textAlign: 'center', color: 'purple', padding: '0.5em' }}>Themes: Hands on! Atmospheric Waves and Weather Data
</h3>
</div>
<div class="col-md-10 col-md-offset-1">

<table class="table table-hover table-striped" style={{fontSize:'1.25em'}}>
<thead class="thead-dark">
  <tr>
    <th scope="col">Timing</th>
    <th scope="col">Activity</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>9:00-9:15</td>
    <td>
Weather patterns and weather fronts</td>
  </tr>
  <tr>
    <td>9:15-10:30</td>
    <td>
Activity: Atmospheric Fluid Rotation on turntable. Discuss rotation of fluids with different densities.</td>
  </tr>
  <tr>
    <td>10:30-10:45</td>
    <td>Weather observation break

</td>
   </tr><tr>
     <td>10:45-11:45</td>
     <td>Activity: Map sort, campers in groups have to sort the days in temporal progression based on only looking at images of weather maps and satellite data.
</td>
    </tr><tr>
      <td>
11:45-12:30
</td>
      <td>Lunch</td>
     </tr><tr>
       <td>12:30-12:45</td>
       <td>Radiosonde set-up demonstration </td>
      </tr><tr>
        <td>
12:30-1:30
</td>
        <td>Drawing data on surface weather maps. Weather barbs, contours, weather fronts</td>
       </tr><tr>
         <td>1:30-1:45</td>
         <td>Weather Observation Break</td>
        </tr>
        <tr>
          <td>1:45-2:30</td>
          <td>Drawing weather maps (continued)</td>
         </tr>
         <tr>
           <td>2:30-3:00</td>
           <td>Closing talk with pictures and certificate presentations.</td>
          </tr>
</tbody>
</table>
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

export default Schedule;
