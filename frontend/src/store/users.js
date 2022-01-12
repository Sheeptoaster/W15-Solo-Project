
const LOAD_USER = 'users/loadUser';
const LOAD_USER_CHECKIN = 'users/loadUserCheckin';
const LOAD_CHECKIN_OVERVIEW = 'users/loadCheckinOverview';


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

export const getUser = id => async dispatch => {
    const res = await fetch(`/api/users/${id}`);
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

        default:
            return state;
    }
}

export default userReducer;
