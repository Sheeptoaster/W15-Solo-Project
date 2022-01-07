// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import * as sessionActions from "../../store/session";
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch()
    
    async function demoUser(e) {
        e.preventDefault()
        return dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' })
        )
    }

    let sessionLinks;
    let items;
    if (sessionUser) {
        items = 4
        sessionLinks = (
            <>
                <div>
                    <NavLink to='#'>Filler 2 Logged In</NavLink>
                </div>
                <ProfileButton user={sessionUser} />
            </>
        );
    } else {
        items = 3
        sessionLinks = (
            <div>
                <div>
                    <button onClick={demoUser}>Demo User
                    </button>
                </div>
                <div className='login-and-signup-links' >
                    <LoginFormModal />
                </div>
            </div>
        );
    }



    return (
        <div className='navbar-container'>
            <nav className='navbar' style={{ gridTemplateColumns: `repeat(${items}, 1fr)` }}>
                <div>
                    <NavLink exact to="/">Home</NavLink><i className="fas fa-home"></i>
                </div>
                <div>
                    <NavLink exact to="#">Filler</NavLink><i className="fas fa-home"></i>
                </div>
                {isLoaded && sessionLinks}
                <span className='nav-line'></span>
            </nav>
        </div>
    );
}

export default Navigation;
