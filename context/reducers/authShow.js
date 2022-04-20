let initial = true

const authShow = (state = initial, action) => {
    switch (action.type) {
        case "TOGGLE_AUTH_HOLDER":
            return state = !state
    
        default:
            return state
    }
}

export default authShow