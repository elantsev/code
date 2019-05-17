import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom'

import App1 from './App1/App1'
import App2 from './App2/App2'
import App3 from './App3/App3'

function Index() {
  return <h2>Home</h2>
}
function Error() {
  return <h1>Ошибка. Запрашиваемого компонента не существует</h1>
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/app1/">App1</NavLink>
            </li>
            <li>
              <NavLink to="/app2/">App2</NavLink>
            </li>
            <li>
              <NavLink to="/app3/">App3</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/app1/" component={App1} />
          <Route path="/app2/" component={App2} />
          <Route path="/app3/" component={App3} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
