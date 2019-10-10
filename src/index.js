import React from 'react'
import RreactDOM from 'react-dom'
// HashRouter 地址栏带#
// BrowserRouter 地址栏不带#
// HashRouter BrowserRouter
// import {BrowserRouter as Router, Route} from 'react-router-dom'

import MyRouter from './routers'
import './statics/css/base.css'
import 'antd-mobile/dist/antd-mobile.css';
RreactDOM.render(<MyRouter/>,document.getElementById('root'))