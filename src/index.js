import React from 'react';
import ReactDom from 'react-dom';
import App from './Components/App';
import './Components/index.css';
import store from './store';
import {Provider} from 'react-redux'; //connnection between react and redux//
import ToDo from './Components/ToDo';


store.subscribe(() =>  console.log(store.getState()));   //change listener//



ReactDom.render(
  <Provider store={store}>
<ToDo/>
<App/>

</Provider>,

   document.getElementById('root') 
  );

