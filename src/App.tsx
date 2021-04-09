import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Container, Editor } from './components'
import { getId } from './utils'

export default function App() {
  return (
    <Container>
      <Switch>
        <Route path='/:id' component={Editor} />
        <Redirect to={getId()} />
      </Switch>
    </Container>
  )
}
