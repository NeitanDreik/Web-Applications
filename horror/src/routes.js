import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Aboutus from './Aboutus'
import App from './App'

export const routes = (
    <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/aboutus" component={Aboutus} />
    </Router>
)