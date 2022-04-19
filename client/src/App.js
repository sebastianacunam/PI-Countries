import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/home' component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

/* <h1>Henry Countries</h1> */
/* <a href="http://localhost:3000/countries">Ingresar a la APP! </a> */