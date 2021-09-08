import React,{lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import * as ROUTES from './constants/route'


const Dashboard= lazy(()=>import('./pages/dashboard'))
const Login=lazy(()=>import('./pages/login'))
const Signup=lazy(()=>import('./pages/signup'))
const Profile=lazy(()=>import('./pages/profile'))
const NotFound=lazy(()=>import('./pages/not-found'))
function App() {
  return (
    <Router>
     <Suspense fallback={<p>This is loading...</p>}>
       <Switch>
           <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
           <Route path={ROUTES.NOT_FOUND} component={NotFound}/>
           <Route path={ROUTES.PROFILE} component={Profile}/>
           <Route path={ROUTES.LOGIN} component={Login} />
           <Route path={ROUTES.SIGN_UP} component={SignUp} />
       </Switch>
     </Suspense>
    </Router>
  );
}

export default App;
