import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Default from './components/default/default.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    
  }

  render() {
    return (
      <div>
        <div>router</div>
        <div>
          <Router>
            <Switch>
              <Route
                exact
                path='/'
                component={Default}
              />
              __react_router__
            </Switch>
          </Router>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  title: PropTypes.string
};

