import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Firebase,FieldValue} from './lib/firebase'
import FirebaseContext from './context/firebase'

ReactDOM.render(
    <FirebaseContext.Provider value={{ Firebase, FieldValue }}>
      <App/>
    </FirebaseContext.Provider>,document.getElementById('root')
)


