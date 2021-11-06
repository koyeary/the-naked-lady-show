import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
//import About from './containers/About';
import MainNav from './components/MainNav';

const App = () => {
  return (
    <Router>
    <MainNav />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/home' component={Home}/>
{/*         <Route path='/about' component={About}/> */}
      </Switch>
    </Router>


  );
};

export default App;