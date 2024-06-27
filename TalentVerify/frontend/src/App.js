import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CompanyList from './components/CompanyList';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/companies" component={CompanyList} />
          <Route path="/employees" component={EmployeeList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;