import React from 'react';
import { Header } from './components/Header';
import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Recommender } from './pages/Recommender';
import { Repository } from './pages/Repository';

export function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/repository' component={Repository} />
          <Route path='/recommender' component={Recommender} />
        </Switch>
      </Router>
    </>
  );
}
