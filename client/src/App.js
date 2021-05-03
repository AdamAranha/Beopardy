import logo from './logo.svg';
import './App.css';
import Game from './pages/Game/Game'
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import landing from './pages/Landing/Landing'
import game from './pages/Game/Game'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/game" component={game}></Route>
        <Route exact path="/" component={landing}></Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
