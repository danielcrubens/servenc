import React, { memo } from "react"
import { Switch, Redirect, Route } from "react-router-dom"

import Home from "./pages/Home"
import Construcao from "./pages/Construcao"

function Routes() {
  return (
    <Switch>
      {/* <Route path="/" exact component={Construcao} /> */}
      <Route path="/" exact component={Home} />
      <Redirect path="*" exact to="/" />
    </Switch>
  )
}

export default memo(Routes)
