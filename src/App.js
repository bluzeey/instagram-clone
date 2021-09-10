import React,{lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import * as ROUTES from './constants/route'
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';

const Dashboard= lazy(()=>import('./pages/dashboard'))
const Login=lazy(()=>import('./pages/login'))
const Signup=lazy(()=>import('./pages/signup'))
const Profile=lazy(()=>import('./pages/profile'))
const NotFound=lazy(()=>import('./pages/not-found'))
function App() {
  const {user}=useAuthListener()
  return (
    <UserContext.Provider value={{user}}>
    <Router>
     <Suspense fallback={<p>This is loading...</p>}>
       <Switch>
           <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
           <Route component={NotFound}/>
           <Route path={ROUTES.PROFILE} component={Profile}/>
           <Route path={ROUTES.LOGIN} component={Login} />
           <Route path={ROUTES.SIGN_UP} component={Signup} />
       </Switch>
     </Suspense>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
