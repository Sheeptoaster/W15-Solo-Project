import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as userActions from '../../store/users';
import * as drinkActions from '../../store/drinks';
import * as storeActions from '../../store/stores';

import CheckinOverview from './CheckinOverview';
import DrinkOverview from './DrinkOverview';



import './SplashPage.css';

function SplashPage() {
    const dispatch = useDispatch();

    const checkin = useSelector(state => state.users.checkins);
    const drinks = useSelector(state => state.drinks.drinks.data);
    const stores = useSelector(state => state.stores.stores.data)

    console.log('DRINKS', drinks);
    console.log('STORES', stores);

    useEffect(() => {
        dispatch(userActions.getCheckinOverview())
        dispatch(drinkActions.getDrinksOverview())
        dispatch(storeActions.getStoresOverview())
    }, [dispatch])

    return (
        <div>

            <CheckinOverview checkin={checkin} />

            <DrinkOverview drinks={drinks} />

            <div>
                <h2>Popular Bars</h2>
            </div>

        </div>
    )
}


export default SplashPage;
