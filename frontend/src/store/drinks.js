import { csrfFetch } from "./csrf";

const LOAD_DRINKS_OVERVIEW = 'drinks/loadDrinksOverview';
const LOAD_ALL_DRINKS = 'drinks/loadAllDrinks';
const FIND_DRINKS = 'drinks/findDrinks';

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

const findDrinks = findDrink => {
    return {
        type: FIND_DRINKS,
        payload: findDrink
    }
}


export const getDrinksOverview = () => async dispatch => {
    const res = await csrfFetch('/api/drinks/');
    if (res.ok) {
        const drinkOverview = await res.json();
        dispatch(loadDrinksOverview(drinkOverview))
    }
}

export const getDrinks = () => async dispatch => {
    const res = await csrfFetch('/api/drinks/loaddrinks');
    if (res.ok) {
        const allDrinks = await res.json();
        dispatch(loadAllDrinks(allDrinks));
    }
}

export const searchDrink = (key) => async dispatch => {
    let res = await csrfFetch(`/api/drinks/search/${key}`);

    const findDrink = await res.json()
    dispatch(findDrinks(findDrink))
}

const initialState = {
    drinks: {},
}


const drinkReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_DRINKS_OVERVIEW: {
            return { ...state, drinks: action.payload };
        }

        case LOAD_ALL_DRINKS: {
            newState = { ...state }
            newState.drinks.drinks = action.payload
            return newState;
        }

        case FIND_DRINKS: {
            newState = { ...state }
            newState.drinks.found = action.payload
            return newState;
        }

        default:
            return state;
    }
}

export default drinkReducer;
