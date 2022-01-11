import React from "react";

function DrinkOverview({ drinks }) {
    return(
        <div className='homepage-drink-overview-container'>
            <h2>Popular Drinks</h2>
            {drinks?.map((drink) => {
                return (
                    <div key={drink.id} className='homepage-drink-card'>

                        <h2 className="homepage-drink-name">{drink.name}</h2>
                        <img src={drink.imageUrl}></img>
                        <h4>{drink.description}</h4>
                        <ul>
                            {drink.Flavors.map((flavor) => {
                                return (
                                    <li key={flavor.id}>{flavor.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default DrinkOverview
