
const LOAD_USER = 'users/loadUser';

const LOAD_USER_CHECKIN = 'users/loadUserCheckin';

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



export const getUser = (id) => async dispatch => {
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



const userReducer = (state = { user: null, checkins: null }, action) => {
    switch (action.type) {
        case LOAD_USER: {
            return { ...state, user: action.payload };
        };

        case LOAD_USER_CHECKIN: {
            return { ...state, checkins: action.payload }
        };

        default:
            return state;
    }
}

export default userReducer;
