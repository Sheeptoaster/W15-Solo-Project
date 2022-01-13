import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import * as storeActions from '../../store/stores';

import './StoresPage.css'

function StoresPage() {
    const dispatch = useDispatch();

    const stores = useSelector(state => state.stores.stores);

    useEffect(() => {
        dispatch(storeActions.getStores())
        document.title = 'Bars'
    }, [dispatch])

    return (
        <>
            <div className="main-container-store-details">
                {stores?.data?.map((store) => {
                    return (
                        <div key={store.id} className="store-details-container">

                            <div className="store-details-header">
                                <NavLink to={`/stores/${store.id}`} className="storepage-navlink-store-details">{store.name}</NavLink>
                                <h3 className="store-location">{store.location}</h3>
                            </div>

                            <h4 className="store-description">{store.description}</h4>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default StoresPage;
