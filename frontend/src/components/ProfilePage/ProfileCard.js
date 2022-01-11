import React from "react";

import './Profilecard.css'

function ProfileCard({ user }) {
    return (
        <>
            <div className="profile-user-card">
                <img src={user?.avatarUrl} className="profile-user-avatar"></img>
                <h2 className="profile-user-username">{user?.username}</h2>
                <h3 className="profile-user-bio">{user?.bio}</h3>
            </div>
        </>
    )
}

export default ProfileCard;
