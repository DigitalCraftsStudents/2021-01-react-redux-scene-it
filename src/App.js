import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Container>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
