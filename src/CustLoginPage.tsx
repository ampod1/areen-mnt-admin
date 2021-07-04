import React, { ComponentType, ReactChild } from 'react';
import { Login, LoginComponent, LoginForm } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';


const MyLoginForm = withStyles({
    button: { background: '#d4b561' },
})(LoginForm);


const CustLoginPage = (props:any) => (
    <Login loginForm={<MyLoginForm />} {...props} />
);

export default MyLoginForm as LoginComponent;