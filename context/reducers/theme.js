let dark = true

const themeReducer = (state = dark, action) => {
    switch (action.type) {
        case "TOGGLE":
            return state = !state
    
        default:
            return state
    }
}

export default themeReducer