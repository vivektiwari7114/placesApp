import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import DisplayMap from './modules/DisplayMap'
import HomePage from './modules/HomePage'
render((
  <Router history={hashHistory}>
    <Route path="/" component={HomePage}>
      <IndexRoute component={HomePage}/>
    </Route>
  </Router>
), document.getElementById('map'))
