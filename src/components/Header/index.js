import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/utils';


import sisterhoodLogo from "./../../assets/sisterhoodLogo.png"; 

const Header = props => {
    const { currentUser } = props

    return (
        <header className = "header">
            <div className = "wrap">
                <div className = "logo">
                    <Link to="/">
                        <img src = {sisterhoodLogo} alt = "sisterhood Logo"/> 
                    </Link>
                </div>
                <div className = "callToActions">
                    {/* if user not null, show a Logout */}
                    {currentUser && (
                        <ul>
                            <li>
                                <span onClick={() => auth.signOut()}>
                                    Logout
                                </span>
                            </li>
                        </ul>
                    )}

                    {/* if user is null, show register and login */}
                    {!currentUser && (
                        <ul>
                            <li>
                                <Link to="/registration">
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link className = "loginLink" to="/login">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );

};

Header.defaultProps = {
    currentUser: null
};

export default Header; 