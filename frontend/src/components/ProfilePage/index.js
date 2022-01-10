import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../store/users';


async function ProfilePage() {
    const dispatch = useDispatch();

    const { userId } = useParams();
    const user = useSelector(state => {
        return state.user.map(userId => state.user[userId])
    });

    useEffect(() => {
        dispatch(getUser(userId))
    }, [dispatch])


    return (
        <div>
            <p>{user.username}</p>
        </div>
    )
}

export default ProfilePage;
