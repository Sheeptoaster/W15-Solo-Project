
const LOAD_USER = 'users/LOAD_USER';

const LOAD_USER_CHECKIN = 'users/LOAD_USER_CHECKIN';

const loadUser = user => ({
    type: LOAD_USER,
    user,
})


export const getUser = (id) => async dispatch => {
    const res = await fetch(`/api/users/${id}`);
    if (res.ok) {
        const user = await res.json();
        dispatch(loadUser(user))
    }
}


const userReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_USER: {
            if (!state[action.user.id]) {
                const newState = {
                    ...state,
                    [action.user.id]: action.user
                };
                const userList = newState.list.map(id => newState[id]);
                userList.push(action.user);
                return newState;
            }
            return {
                ...state,
                [action.user.id]: {
                    ...state[action.user.id],
                    ...action.user,
                }
            };
        }
        default:
            return state;
    }
}

export default userReducer;
