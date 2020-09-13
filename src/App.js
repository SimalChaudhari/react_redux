import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch} from 'react-router-dom';
import route from './routes';

const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/admin" component={route} />
      </Switch>
    </Router>
  );
}

export default App;
