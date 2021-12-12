import React from 'react';
import ReactDOM from 'react-dom';
import {MainView} from './components/main-view/main-view'; //import mainview component from mainview.jsx



//bundle index.scss through its imported file
import './index.scss';

//main component
class udo_flixApplication extends React.Component{
   render() {
   return (
         <MainView />
      );
   }
}

//this finds the root of my app
const container = document.getElementsByClassName('app-container')[0];

//tell react to render my app in the root DOM element
ReactDOM.render(React.createElement(udo_flixApplication), container);