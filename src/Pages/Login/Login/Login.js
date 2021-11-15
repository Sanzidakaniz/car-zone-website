import { Container, Grid,Typography,TextField, Button,CircularProgress,Alert  } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import login from '../../../images/car1.png'
import useAuth from '../../../hooks/useAuth'

const Login = () => {
    const [loginData,setLoginData]=useState();
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange=e=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit=e=>{
        loginUser(loginData.email, loginData.password,location, history);
e.preventDefault();
    }
    return (
       <Container>
           <Grid container spacing={2}>
  <Grid item xs={12} md={6}>
  <img  style={{width:'100%'}} src={login} alt="/" />
  </Grid>
  <Grid item xs={12} md={6}>
  <Typography   sx={{textAlign: 'center',fontSize:30,mt:8 ,fontWeight: 'bold'}}variant="body1" gutterBottom>
       Login
      </Typography>
      <form onSubmit={handleLoginSubmit}>
      <TextField 
      sx={{width: "75%",m:1}}
      id="standard-basic" 
      label="Your Email"
      name="email"
      onBlur={handleOnChange}
    variant="standard" />
      <TextField  sx={{width: "75%",m:1}}
      id="standard-basic" 
      label="Your Password"
      name="password"
      onBlur={handleOnChange}
      type='password'
    variant="standard" />
<Button sx={{width: "75%",m:1}} variant="contained" type="submit">Login</Button>
<NavLink to="/Register" style={{ textDecoration: 'none' }}><Button variant="text"> Are you a new user? Please Register</Button></NavLink>


      </form>
      {isLoading && <CircularProgress />}
   {user?.email && <Alert severity="success">Successfully Login!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
  </Grid>
 
  
</Grid>
       </Container>
    );
};

export default Login;