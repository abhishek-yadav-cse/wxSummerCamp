import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/animation.sass';
import './styles/global.sass';
import './styles/fonts.sass';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept()
}

//registerServiceWorker();
