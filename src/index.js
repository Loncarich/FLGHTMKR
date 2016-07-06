import App from './components/app.js';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500, green500 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
   primary1Color: cyan500,
   primary2Color: green500,
  }
})

const Index = () => (
  <MuiThemeProvider  muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<Index />, document.getElementById('container'));