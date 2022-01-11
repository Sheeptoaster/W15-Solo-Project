import React from "react";

function StoresOverview({ stores }) {
    return (
        <div className="homepage-store-overview-container">
            <h2>Popular Bars</h2>
            {stores?.map((store) => {
                return (
                    <div key={store.id} className="homepage-store-card">

                        <div className="stores-info-container">
                            <h3 className="store-name">{store.name}</h3>
                            <h4 className="store-description">{store.description}</h4>
                            <h4 className="store-location">{store.location}</h4>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default StoresOverview
