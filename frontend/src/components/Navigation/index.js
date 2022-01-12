// frontend/src/components/Navigation/index.js
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import * as sessionActions from "../../store/session";
import * as userActions from '../../store/users';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const currentUser = useSelector(state => state.users.user)

    const dispatch = useDispatch()

    const id = sessionUser.id

    useEffect(() => {
        dispatch(userActions.getUser(id));
    }, [id, dispatch])

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
                    <NavLink to='/drinks'>Drinks</NavLink><i className="fas fa-beer"></i>
                </div>
                <ProfileButton user={sessionUser} currentUser={currentUser} />
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
                    <NavLink exact to="/bars">Bars</NavLink><i className="fas fa-store"></i>
                </div>
                {isLoaded && sessionLinks}
                <span className='nav-line'></span>
            </nav>
        </div>
    );
}

export default Navigation;
