import React from "react";

import EditCheckinCard from "./EditCheckinCard/EditCheckinCard";

import './ProfileCheckin.css'

function ProfileCheckin({ user, checkin, sessionUser }) {
    if (user.id === sessionUser?.id) {
        return (
            <>
                <h2 className="username-checkin-title">
                    {user.username} Checkins
                </h2>
                <div className="profile-checkin-container">
                    {checkin?.map((check) => {
                        return (
                            <EditCheckinCard key={check.id} check={check} user={user} />
                        )
                    })}
                </div>
            </>
        )
    } else {
        return (
            <>
                <h2 className="username-checkin-title">
                    {user.username} Checkins
                </h2>
                <div className="profile-checkin-container">
                    {checkin?.map((check) => {
                        return (
                            <div key={check.id} className="profile-checkin-card">

                                <div className="checkin-user-info-container">
                                    <img src={user.avatarUrl} className="checkin-user-avatar"></img>
                                    <h3 className="checkin-user-username">{user.username}</h3>
                                </div>

                                <div className="checkin-info-container">
                                    <h4 className="checkin-user-drink-name">{check.Drink.name}</h4>
                                    <h4 className="checkin-user-store-name">{check.Store.name}</h4>
                                </div>

                                <h4 className="checkin-user-comment">{check.comment}</h4>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}

export default ProfileCheckin;
