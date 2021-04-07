import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { Container } from 'react-bootstrap';
import Watchlist from './pages/Watchlist';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
      </nav>
      <Container>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/watchlist" exact>
            <Watchlist />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
