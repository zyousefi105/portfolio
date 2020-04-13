// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App';
// import './index.css';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Reviews from './components/Reviews';
import './index.css';
import ListOrders from './components/ListOrders';
import Projects from './components/Projects';
import Search from './components/Search';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}> 
    <Switch>
      <Route exact path='/music' component={Search} />
      <Route exact path='/' component={App} />
      <Route path='/projects' component={Projects}  />
      <Route path='/reviews' component={Reviews} />
      <Route path='/ListOrders' component={ListOrders} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
