import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as userActions from '../../store/users';
import * as drinkActions from '../../store/drinks';
import * as storeActions from '../../store/stores';

import CheckinOverview from './CheckinOverview';
import DrinkOverview from './DrinkOverview';
import StoresOverview from './StoresOverview';


import './SplashPage.css';

function SplashPage() {
    const dispatch = useDispatch();

    const checkin = useSelector(state => state.users.checkins);
    const drinks = useSelector(state => state.drinks.drinks.data);
    const stores = useSelector(state => state.stores.stores.data)



    useEffect(() => {
        dispatch(userActions.getCheckinOverview())
        dispatch(drinkActions.getDrinksOverview())
        dispatch(storeActions.getStoresOverview())
        document.title = 'Home'
    }, [dispatch])

    return (
        <div>
            <div className='site-title-header'>
                <img src='https://res.cloudinary.com/dsjuna344/image/upload/v1642135311/bars/ReTappd_2_coawtz.png'>
                </img>
            </div>
            <CheckinOverview checkin={checkin} />

            <DrinkOverview drinks={drinks} />

            <StoresOverview stores={stores} />

        </div>
    )
}


export default SplashPage;
