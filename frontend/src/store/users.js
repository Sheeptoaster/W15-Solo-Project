import Cookies from "js-cookie";

const LOAD_USER = 'users/loadUser';
const LOAD_USER_CHECKIN = 'users/loadUserCheckin';
const LOAD_CHECKIN_OVERVIEW = 'users/loadCheckinOverview';
const ADD_CHECKIN = 'users/addCheckin';


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
    const { user, drinks, location, comment } = data;

    const XSRF = Cookies.get('XSRF-TOKEN');

    const res = await fetch('/api/checkins/create', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId: user.id,
            drinks,
            location,
            comment,
        }),
    });
    const newData = await res.json()
    dispatch(addCheckin(newData))
    return newData;
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

        default:
            return state;
    }
}

export default userReducer;
