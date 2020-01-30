import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'reactjs-toastr/lib/toast.css';




ReactDOM.render(

  <Router>
      <div>
        <Route exact path='/' component={App} />
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
