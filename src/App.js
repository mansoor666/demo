import logo from './logo.svg';
import './App.css';
import {

  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './compnents/Navbar';
import UNASSIGNEDTASKS from './compnents/UNASSIGNED TASKS';
import ASSIGNEDTASKS from './compnents/ASSIGNED TASKS';
import ALLTASKS from './compnents/ALL TASKS';

function App() {
  return (
   <Router>
     <Navbar />
     <Switch>
          <Route exact path="/about" component={UNASSIGNEDTASKS}>
          </Route>
          <Route exact path="/about" component={ASSIGNEDTASKS}>
          </Route>
          <Route exact path="/about" component={ALLTASKS}>
          </Route>
        </Switch>

   </Router>
  );
}

export default App;
