export const initialState = {
    locked: false,
    closed: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_LOCK': {
            return {
                ...state,
                locked: !state.locked
            }
        }
        case 'TOGGLE_OPEN': {
            return {
                ...state,
                closed: !state.closed
            }

        }
        default: {
            return state
        }
    }
}