
const LOAD_DRINKS_OVERVIEW = 'drinks/loadDrinksOverview';
const LOAD_ALL_DRINKS = 'drinks/loadAllDrinks';

const loadDrinksOverview = drinks => {
    return {
        type: LOAD_DRINKS_OVERVIEW,
        payload: drinks
    }
}

const loadAllDrinks = drinks => {
    return {
        type: LOAD_ALL_DRINKS,
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

export const getDrinks = () => async dispatch => {
    const res = await fetch('/api/drinks/loaddrinks');
    if(res.ok) {
        const allDrinks = await res.json();
        dispatch(loadAllDrinks(allDrinks));
    }
}

const initialState = {
    drinks: {},
}


const drinkReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DRINKS_OVERVIEW: {
            return { ...state, drinks: action.payload };
        }

        case LOAD_ALL_DRINKS: {
            return { ...state, drinks: action.payload };
        }

        default:
            return state;
    }
}

export default drinkReducer;
