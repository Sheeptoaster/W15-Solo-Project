import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as userActions from '../../store/users';

import ProfileCheckin from "./ProfileCheckin";
import ProfileCard from "./ProfileCard";

function ProfilePage() {
    const dispatch = useDispatch();

    const { id } = useParams();
    const user = useSelector(state => state.users.user);
    const checkin = useSelector(state => state.users.checkins);


    useEffect(() => {
        dispatch(userActions.getUser(id))
        dispatch(userActions.getUserCheckins(id))
    }, [dispatch])

    return (
        <>
            <ProfileCard user={user} />
            <ProfileCheckin user={user} checkin={checkin} />
        </>
    )
}

export default ProfilePage;
