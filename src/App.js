import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="main-container">
    <Header />
    <Switch>
      <Route exact path="/">
        {Home}
      </Route>
      <Route path="/about">{About}</Route>
      <Route path="/contact">{Contact}</Route>
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
