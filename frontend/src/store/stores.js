
const LOAD_STORES_OVERVIEW = 'stores/loadStoresOverview';
const LOAD_ALL_STORES = 'stores/loadAllStores';

const loadStoresOverview = stores => {
    return {
        type: LOAD_STORES_OVERVIEW,
        payload: stores
    }
}

const loadAllStores = store => {
    return {
        type: LOAD_ALL_STORES,
        payload: store
    }
}


export const getStoresOverview = () => async dispatch => {
    const res = await fetch('/api/stores');
    if(res.ok) {
        const storeOverview = await res.json();
        dispatch(loadStoresOverview(storeOverview))
    }
}


export const getStores = () => async dispatch => {
    const res = await fetch('/api/stores/loadstores');
    if(res.ok) {
        const allStores = await res.json();
        dispatch(loadAllStores(allStores))
    }
}

const initialState = {
    stores: {},
}

const storeReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_STORES_OVERVIEW: {
            return { ...state, stores: action.payload };
        }

        case LOAD_ALL_STORES: {
            return { ...state, stores: action.payload };
        }

        default:
            return state;
    }
}


export default storeReducer;
