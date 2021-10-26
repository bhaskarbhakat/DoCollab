import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"
import TextEditor from './component/TextEditor'
export default function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact>
        <Redirect to={`/documents/${uuidV4()}`} />
      </Route>
      <Route path="/documents/:id">
        <TextEditor />
      </Route>
    </Switch>
  </Router>
  )
}
