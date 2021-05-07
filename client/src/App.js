import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Landing from './pages/Landing/Landing'
import Game from './pages/Game/Game'
import Login from './pages/Login/Login'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/game" component={Game}></Route>
        <Route exact patth="/login" component={Login}></Route>
        <Route exact path="/" component={Landing}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
