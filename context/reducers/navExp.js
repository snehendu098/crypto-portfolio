let initial = false

const navExp = (state = initial, action) => {
    switch (action.type) {
        case "NAV":
            return state = !state
    
        default:
            return state
    }
}

export default navExp