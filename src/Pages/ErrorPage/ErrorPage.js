import React from 'react';
import { useHistory } from 'react-router';
import Navigation from '../../SharedComponent/Navigation';
import Footer from '../../SharedComponent/Footer';
import './ErrorPage.css'
const ErrorPage = () => {
      const history = useHistory();
      const handleBackHome = () => {
            history.push('/home');
      }
    return (
        <section>
            <Navigation></Navigation>
            <div  style={{padding: "150px 0px"}}>
                <div className="errorImg">  
                <h1 className="errorPageArea">Page Not Found 404 Error</h1>
                    <br />
                    {/* <button className="error" onClick={handleBackHome} >Back Home</button> */}
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default ErrorPage;