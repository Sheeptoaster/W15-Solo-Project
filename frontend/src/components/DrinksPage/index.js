import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as drinkActions from '../../store/drinks'

import './DrinksPage.css'

function DrinksPage() {
    const dispatch = useDispatch();

    const drinks = useSelector(state => state.drinks.drinks)

    console.log('DRINK DETAILS', drinks);

    useEffect(() => {
        dispatch(drinkActions.getDrinks())
    }, [dispatch])

    return (
        <>
            <div>
                {drinks?.data?.map((drink) => {
                    return (
                        <div key={drink.id} className="drink-details-container">

                            <div className="drink-details-header">
                                <NavLink to={`/drinks/${drink.id}`} className='drinkpage-navlink-drink-details'>{drink.name}</NavLink>
                                <img src={drink.imageUrl} className="drinkpage-drink-imageUrl"></img>
                            </div>

                            <h4 className="drinkpage-drink-description">{drink.description}</h4>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default DrinksPage;
