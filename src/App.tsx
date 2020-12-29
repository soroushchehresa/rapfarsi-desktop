import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './containers/Home';
import 'antd/dist/antd.css';
import GlobalStyles from './GlobalStyles';
import store from './redux/store';
import Player from './components/common/Player';

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <Player />
    </Provider>
  );
}
