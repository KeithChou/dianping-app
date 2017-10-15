import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Detail from '../page/Detail'
import Home from '../page/Home'
import List from '../page/List'
import NotFound from '../page/NotFound'

class RouterMap extends React.Component {
  render () {
    return (
      <Switch>
        <Route path='/home' component={Home} ></Route>
        <Route path='/list' component={List}></Route>
        <Route path='/detail' component={Detail}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    )
  }
}

export default RouterMap
