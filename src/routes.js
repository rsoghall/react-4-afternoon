import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import About from './components/About/About'
import ClassList from './components/ClassList/ClassList'
import Student from './components/Student/Student'

export default(
    <Router>
        <Switch>
            <Route path="/student/:id" component={Student} />
            <Route path="/classlist/:class" component={ClassList} />
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />


        </Switch>
    </Router>
)
