import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import './App.css';
import Home from './Home';
import About from './About';
import Reflectivity from './Reflectivity';
import First from './first';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Signup from './signup';
import UploadScreen from './UploadScreen';
import Schedule from './schedule';
import Login from './login';
import FAQ from './faq';

import {
  indigo500, indigo700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#05B8CC	',
    primary2Color: grey100,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: indigo500,
    shadowColor: fullBlack,
  },
});


class App extends Component {

  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="App">
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/About" component={About}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/UploadScreen" component={UploadScreen}/>
              <Route path="/schedule" component={Schedule}/>
              <Route path="/faq" component={FAQ}/>


          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
