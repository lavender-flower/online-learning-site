import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading} =useAuth();
    if(isLoading){
return <div className="spinner-border text-light m-5" role="status">
<span className="visually-hidden">Loading...</span>
</div>
    }
    return (
        <Route
        {...rest}
      render={
        ({location})=>user.email? children: <Redirect
     to={{
        pathname:"/login",
        state:{from: location}
     }}   
        ></Redirect>
      }  
>
        </Route>
    );
};

export default PrivateRoute;