import React from "react"
import { NavLink } from "react-router-dom"


function CheckinOverview({ checkin }) {
    return (
        <div className='homepage-checkin-overview-container'>
            <h2>Popular Checkins</h2>
            {checkin.data?.map((check) => {
                return (
                    <div key={check.id} className='profile-checkin-card'>

                        <div className="checkin-user-info-container">
                            <img src={check?.User.avatarUrl} className="checkin-user-avatar"></img>
                            <h3 className="checkin-user-username"><NavLink style={{textDecoration: 'none'}} to={`/users/${check?.User.id}`}>{check?.User.username}</NavLink></h3>
                        </div>

                        <div className="checkin-info-container">
                            <h4 className="checkin-user-drink-name">{check?.Drink.name}</h4>
                            <h4 className="checkin-user-store-name">{check?.Store.name}</h4>
                        </div>

                        <h4 className="checkin-user-comment">{check?.comment}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default CheckinOverview
