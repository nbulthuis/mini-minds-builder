import * as React from 'react';
import { Router, Route } from 'react-router';

import Navbar from './Navbar'
import Home from './Home'
import MatchingGame from "./MatchingGame";
import SlidePuzzle from "./SlidePuzzle";
import Puzzle from "./Puzzle";
import Dashboard from "./Dashboard";

import './App.css';

const App = () => {
  return (
    <>
    //   <Navbar />
    //   <Router>
    //     <div className="App">
    //       <Route exact path="/" component={Home} />
    //       <Route exact path="/dashboard" component={Dashboard} />
    //       <Route exact path="/matching" component={MatchingGame} />
    //       <Route exact path="/slide-puzzle" component={SlidePuzzle} />
    //       <Route exact path="/puzzle" component={Puzzle} />
    //     </div>
    //   </Router>
    </>
  )
}

export default App;
