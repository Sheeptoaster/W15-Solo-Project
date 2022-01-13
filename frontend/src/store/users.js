import { csrfFetch } from "./csrf";

const LOAD_USER = 'users/loadUser';
const LOAD_USER_CHECKIN = 'users/loadUserCheckin';
const LOAD_CHECKIN_OVERVIEW = 'users/loadCheckinOverview';
const ADD_CHECKIN = 'users/addCheckin';
const DELETE_CHECKIN = 'users/deleteCheckin';
const UPDATE_CHECKIN = 'users/updateCheckin';


const loadUser = user => {
    return {
        type: LOAD_USER,
        payload: user,
    }
}

const loadUserCheckin = user => {
    return {
        type: LOAD_USER_CHECKIN,
        payload: user,
    }
}

const loadCheckinOverview = checkin => {
    return {
        type: LOAD_CHECKIN_OVERVIEW,
        payload: checkin
    }
}

const addCheckin = checkin => {
    return {
        type: ADD_CHECKIN,
        payload: checkin
    }
}

const deleteCheckin = checkin => {
    return {
        type: DELETE_CHECKIN,
        payload: checkin
    }
}

const updateCheckin = checkin => {
    return {
        type: UPDATE_CHECKIN,
        payload: checkin
    }
}

export const getUser = id => async dispatch => {
    const res = await fetch(`/api/users/${id}/`);
    if (res.ok) {
        const user = await res.json();
        dispatch(loadUser(user.currentUser))
    }
}


export const getUserCheckins = (id) => async dispatch => {
    const res = await fetch(`/api/users/${id}/checkins`);
    if (res.ok) {
        const userCheckins = await res.json();
        dispatch(loadUserCheckin(userCheckins.userDetails))
    }
}

export const getCheckinOverview = () => async dispatch => {
    const res = await fetch('/api/checkins/');
    if(res.ok) {
        const checkinOverview = await res.json();
        dispatch(loadCheckinOverview(checkinOverview))
    }
}

export const addUserCheckin = (data) => async dispatch => {
    const { user, drink, location, comment } = data;

    const res = await csrfFetch('/api/checkins/create', {
        method: "POST",
        body: JSON.stringify({
            userId: user.id,
            drink,
            location,
            comment,
        }),
    });
    const newData = await res.json()
    dispatch(addCheckin(newData))
    return newData;
}

export const deleteUserCheckin = (id) => async dispatch => {
    const res = await csrfFetch(`/api/checkins/${id}/delete`, {
        method: "DELETE",
    })

    dispatch(deleteCheckin(res))
}

export const updateUserCheckin = (id, body) => async dispatch => {
    const { drink, location, comment } = body;

    console.log('STORE', drink, location, comment);
    const res = await csrfFetch(`/api/checkins/${id}/edit`, {
        method: "PUT",
        body: JSON.stringify({
            drink,
            location,
            comment
        })
    });

    console.log('RES', res);
    const data = await res.json();

    dispatch(updateCheckin(data))

    return data;
}

const initialState = {
    user: {},
    checkins: {},
}

const userReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_USER: {
            return { ...state, user: action.payload };
        };

        case LOAD_USER_CHECKIN: {
            newState = {...state }
            newState.checkins.currentUser = action.payload
            return newState;
        };

        case LOAD_CHECKIN_OVERVIEW: {
            return { ...state, checkins: action.payload }
        }

        case ADD_CHECKIN: {
            return { ...state, checkins: action.payload }
        }

        case DELETE_CHECKIN: {
            return {
                ...state,
                checkins: { ...state.checkins.filter(checkin => checkin !== action.payload )}
            }
        }

        case UPDATE_CHECKIN: {
            console.log('CHECKIN UPDATE', state.checkins.currentUser);
            console.log('CHECKIN PAYLOAD', action.payload);
            const index = state.checkins.currentUser.findIndex(checkin => checkin.id === action.payload.id)

            console.log('INDEX', index);

            return {
                ...state,
                ...state.checkins = {
                    ...state.checkins.currentUser.slice(0, index),
                    ...action.payload,
                    ...state.checkins.currentUser.slice(index),
                }
            }
        }

        default:
            return state;
    }
}

export default userReducer;
