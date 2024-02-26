import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './navigationBar';
import LoginForm from './loginform';
import SignupForm from './signupform';

const HomePage = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Switch>
          <Route path="/api/v1/user/login">
            <LoginForm />
          </Route>
          <Route path="/api/v1/user/signup">
            <SignupForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default HomePage;
