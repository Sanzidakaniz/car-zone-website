import { Container, Grid,Typography,TextField, Button,CircularProgress,Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import login from '../../../images/car1.png'
import useAuth from './../../../hooks/useAuth';

const Register = () => {
    const [loginData,setLoginData]=useState();
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();
   

    const handleOnBlur=e=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit=e=>{
        if (loginData.password !== loginData.newPassword) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password,loginData.name,history);
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
  Register
   </Typography>
   {!isLoading && <form onSubmit={handleLoginSubmit}>
   <TextField
   sx={{ width: '75%', m: 1 }}
   id="standard-basic"
   label="Your Name"
   name="name"
   onBlur={handleOnBlur}
   variant="standard" />
   <TextField 
   sx={{width: "75%",m:1}}
   id="standard-basic" 
   label="Your Email"
   type='email'
   name="email"
   onBlur={handleOnBlur}
 variant="standard" />
   <TextField  sx={{width: "75%",m:1}}
   id="standard-basic" 
   label="Your Password"
   name="password"
   onBlur={handleOnBlur}
   type='password'
 variant="standard" />
   <TextField  sx={{width: "75%",m:1}}
   id="standard-basic" 
   label=" Confirm Your Password"
   name="newPassword"
   onBlur={handleOnBlur}
   type='password'
 variant="standard" />
<Button sx={{width: "75%",m:1}} variant="contained" type="submit">Register</Button>
<NavLink to="/Login" style={{ textDecoration: 'none' }}><Button variant="text">Already Registered ? Please Login</Button></NavLink>


   </form>}
   {isLoading && <CircularProgress />}
   {user?.email && <Alert severity="success">Successfully user created!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
</Grid>


</Grid>
    </Container>
    );
};

export default Register;