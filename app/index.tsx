/// <reference path="../typings/index.d.ts"/>
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router'
import {Home} from './containers/Home'
import {NavigationBar} from './containers/NavigationBar'
import {Footer} from './containers/Footer'
import {About} from './containers/About'
// import {Login} from './containers/Login'
import {Dashboard} from './containers/Dashboard'
import 'bootstrap-loader'
import '!style!css!sass!./styles/main.scss'

class App extends React.Component<any, any> {

  render() {
    return (
      <div>
        <NavigationBar />
        <div style={{height: '3em'}} />
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }

}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/about" component={About} />
      {/*<Route path="/login" component={Login} />*/}
      <Route path="/dashboard" component={Dashboard} />
    </Route>
  </Router>
  ), document.getElementById('app')
)
