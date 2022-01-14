// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session';


function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <button onClick={openMenu}>
                <img
                    src={'https://res.cloudinary.com/dsjuna344/image/upload/v1642134466/bars/ReTappdLogo_zoa8e7.png'}
                    height={'100em'}
                    width={'100em'}
                ></img>
            </button>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li>
                        <NavLink to={`/users/${user.id}`}>
                            {user.username} Profile
                        </NavLink>
                    </li>
                    <li>
                        <button className="logout-btn" onClick={logout}>Log Out</button>
                    </li>
                </ul>
            )}
        </>
    );
}

export default ProfileButton;
