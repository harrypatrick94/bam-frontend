import React from 'react';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import SingleWine from './components/crudWines/SingleWine'
import SingleSeller from './components/crudSellers/SingleSeller'
import SignIn from './components/user/SignIn'
import User from './components/user/User'
import AllWines from './components/crudWines/AllWines'
import Conatiner from './components/Container'


function App() {
  return (
    <Router>
      <Route exact path='/' component={Conatiner} />
      <Route exact path='/signIn' component={SignIn} />
      <Route exact path='/user' component={User} />
      <Route exact path='/user/wines/:wine' component={SingleWine} />
      <Route exact path='/user/sellers/:seller' component={SingleSeller}/>
    </Router>
  );
}

export default App;
