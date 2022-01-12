import React from "react";


function DrinkOverview({ drinks }) {
    return (
        <>
            <h2 className="homepage-h2">Popular Drinks</h2>
            <div className='homepage-drink-overview-container'>
                {drinks?.data?.map((drink) => {
                    return (
                        <div key={drink.id} className='homepage-drink-card'>

                            <div className="homepage-drink-and-image-container">
                                <img className="homepage-drink-imageUrl" src={drink.imageUrl}></img>
                                <h2 className="homepage-drink-name">{drink.name}</h2>
                            </div>

                            <h4 className="homepage-drink-description">{drink.description}</h4>

                            <ul>
                                {drink.Flavors.map((flavor) => {
                                    return (
                                        <li key={flavor.id} className="homepage-drink-flavors">{flavor.name}</li>
                                    )
                                })}
                            </ul>

                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default DrinkOverview
