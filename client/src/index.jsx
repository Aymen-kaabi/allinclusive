import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import BecomeASeller from './Components/BecomeASeller.jsx';
// import Company from './Components/Company.jsx';
// import JobOpp from './Components/JobOpp.jsx';
// import SignIn from './Components/SignIn.jsx';
import SignUpMyAccount from './Components/SignUpMyAccount.jsx';
import Slide from './Components/SlideShow.jsx';
import JobOpp from './Components/JobOpp.jsx';
import Client from './Components/Client.jsx';
import Events from './Components/EventsList.jsx';
import Filter from './Components/searchBar.jsx'

class App extends React.Component {

    render(){
        return(
            <div>
                {/* <Navbar /> */}
                {/* <Slide />  */}
                {/* <Events /> */}
                {/* <Events /> */}
                {/* <BecomeASeller/> */}
                {/* <SignUpMyAccount/> */}
                {/* <Filter /> */}
                <Footer />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("app"));