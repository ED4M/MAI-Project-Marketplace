import React from 'react';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Header from './components/Header/Header.js';
import BodyLayout from './components/BodyLayout/BodyLayout.js';
import 'antd/dist/antd.css';
import './App.css';

import LogInForm from './components/LogInForm/LogInForm.js';
import RegistrationTypePage from './pages/RegistrationTypePage/RegistrationTypePage.js';
import StudentRegisterPage from './pages/StudentRegisterPage/StudentRegisterPage.js';
import CompanyRegisterPage from './pages/CompanyRegisterPage/CompanyRegisterPage.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BodyLayout>
        <Switch>
          <Route path='/login'>
            <LogInForm />
          </Route>
          <Route path='/register-type'>
            <RegistrationTypePage />
          </Route>
          <Route path='/register/student/about'>
            <StudentRegisterPage />
          </Route>
          <Route path='/register/company'>
            <CompanyRegisterPage />
          </Route>
          <Redirect to='/login' />
        </Switch>
      </BodyLayout>
    </div>
  );
}

export default App;
