import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as storeActions from '../../store/stores';

function StoresPage() {
    const dispatch = useDispatch();

    const stores = useSelector(state => state.stores.stores);

    console.log('STORES', stores);

    useEffect(() => {
        dispatch(storeActions.getStores())
    }, [dispatch])

    return (
        <>
        <div>
            {stores?.data?.map((store) => {
                return (
                    <div>{store.name}</div>
                )
            })}
        </div>
        </>
    )
}

export default StoresPage;
