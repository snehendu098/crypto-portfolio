let initial = false

const networkShow = (state = initial, action) => {
    switch (action.type) {
        case "TOGGLE_NET_HOLDER":
            return state = !state
    
        default:
            return state
    }
}

export default networkShow