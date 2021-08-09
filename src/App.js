import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Product from './Components/Product';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div >

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Product" component={Product} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
