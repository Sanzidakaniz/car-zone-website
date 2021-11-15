import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';
import AddReviews from './Pages/AddReview/AddReviews/AddReviews';

import Products from './Pages/Products/Products';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import MyOrder from './Pages/MyOrder/MyOrder';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Payment from './Pages/Payment/Payment';
import AddReview from './Pages/AddReview/AddReviews/AddReviews';
import ManageAllProducts from './Pages/ManageAllProducts/ManageAllProducts';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';


function App() {
  return (
    <AuthProvider>
      <Router>
    <Switch>
      <Route path="/home">
      <Home/>
      </Route>
      
      <Route exact path="/">
       <Home/>
      </Route>
      <PrivateRoute  path="/AddProduct">
    <AddProduct/>
      </PrivateRoute>
      <PrivateRoute  path="/DashBoard">
    <DashBoard/>
      </PrivateRoute>
      <PrivateRoute  path="/MyOrder">
    <MyOrder/>
      </PrivateRoute>
      <PrivateRoute  path="/ManageAllProducts">
    <ManageAllProducts/>
      </PrivateRoute>
      <PrivateRoute  path="/ManageAllOrders">
    <ManageAllOrders/>
      </PrivateRoute>
      <PrivateRoute  path="/Payment">
    <Payment/>
      </PrivateRoute>
      <PrivateRoute  path="/AddReview">
    <AddReview/>
      </PrivateRoute>
      <Route  path="/Products">
    <Products/>
      </Route>
      <PrivateRoute  path="/booking/:productId">
    <Booking/>
      </PrivateRoute>
      <Route  path="/AddReviews">
    <AddReviews/>
      </Route>
      <Route  path="/PlaceOrder">
    <PlaceOrder/>
      </Route>
      <Route path="/Login">
      <Login/>
      </Route>
      <Route path="/Register">
      <Register/>
      </Route>
      <Route exact path="*">
          <ErrorPage />
          </Route>
     </Switch>
   </Router>
    </AuthProvider>
          
  );
}

export default App;
