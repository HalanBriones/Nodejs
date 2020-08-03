import React   from "react";
import Table from './Components/table';
import Formulario from './Components/formulario';
import Registrar from './Components/registrar'
import Login from './Components/login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {  
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registrar">
          <Registrar />
        </Route>
      </Switch>
  </Router>
  );
}
