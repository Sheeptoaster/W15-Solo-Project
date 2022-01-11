
const LOAD_DRINKS_OVERVIEW = 'drinks/loadDrinksOverview';

const loadDrinksOverview = drinks => {
    return {
        type: LOAD_DRINKS_OVERVIEW,
        payload: drinks
    }
}


export const getDrinksOverview = () => async dispatch => {
    const res = await fetch('/api/drinks/');
    if(res.ok) {
        const drinkOverview = await res.json();
        dispatch(loadDrinksOverview(drinkOverview))
    }
}

const initialState = {
    drinks:  {},
}


const drinkReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DRINKS_OVERVIEW: {
            return { ...state, drinks: action.payload };
        }

        default:
            return state;
    }
}

export default drinkReducer;
