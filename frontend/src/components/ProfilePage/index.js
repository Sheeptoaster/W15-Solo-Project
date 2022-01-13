import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as userActions from '../../store/users';
import * as sessionActions from '../../store/session';

import ProfileCheckin from "./ProfileCheckin";
import ProfileCard from "./ProfileCard";
import CreateCheckin from "./CreateCheckin";

import './ProfilePage.css'

function ProfilePage() {
    const dispatch = useDispatch();

    const { id } = useParams();
    const user = useSelector(state => state.users.user);
    const checkin = useSelector(state => state.users.checkins.currentUser);
    const sessionUser = useSelector(state => state.session.user)



    useEffect(() => {
        dispatch(userActions.getUser(id))
        dispatch(userActions.getUserCheckins(+id))
        document.title = "Profile Page"
    }, [id, dispatch])

    return (
        <div>
            <ProfileCard user={user} />
            <CreateCheckin user={user} sessionUser={sessionUser}/>
            <ProfileCheckin checkin={checkin} user={user} sessionUser={sessionUser} />
        </div>
    )
}

export default ProfilePage;
