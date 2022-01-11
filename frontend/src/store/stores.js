
const LOAD_STORES_OVERVIEW = 'stores/loadStoresOverview';

const loadStoresOverview = stores => {
    return {
        type: LOAD_STORES_OVERVIEW,
        payload: stores
    }
}


export const getStoresOverview = () => async dispatch => {
    const res = await fetch('/api/stores');
    if(res.ok) {
        const storeOverview = await res.json();
        dispatch(loadStoresOverview(storeOverview))
    }
}

const initialState = {
    stores:  {},
}

const storeReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_STORES_OVERVIEW: {
            return { ...state, stores: action.payload };
        }

        default:
            return state;
    }
}


export default storeReducer;
