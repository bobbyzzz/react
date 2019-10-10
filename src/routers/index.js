import React, { Component } from 'react'
import Home from '../components/home'
import Details from '../components/details'
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

export default class MyRouter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            // Router 是HashRouter 和 BrowserRouter的重命名
            <Router>
            {/*Switch 给个条件判断，避免路由太多出现bug*/}
                <Switch>
                    <Route path="/Home" component={Home}></Route>
                    <Route path="/Details/:slug" component={Details}></Route>
                    <Redirect from='/' to='/Home'></Redirect>
                </Switch>
            </Router>
        )
    }
}