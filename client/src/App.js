import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import NewActivity from './components/NewActivity';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/home' component={Home}/>
          <Route path='/activity' component={NewActivity}/>
          <Route path='/home/:id' component={CountryDetail}/>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

/* <h1>Henry Countries</h1> */
/* <a href="http://localhost:3000/countries">Ingresar a la APP! </a> */