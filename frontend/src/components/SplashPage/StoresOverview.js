import React from "react";


function StoresOverview({ stores }) {
    return (
        <>
            <h2 className="homepage-h2">Popular Bars</h2>
            <div className="homepage-store-overview-container">
                {stores?.map((store) => {
                    return (
                        <div key={store.id} className="homepage-store-card">

                            <div className="homepage-stores-info-container">
                                <h3 className="homepage-store-name">{store.name}</h3>
                                <h4 className="homepage-store-description">{store.description}</h4>
                                <h4 className="homepage-store-location">{store.location}</h4>
                            </div>

                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default StoresOverview
