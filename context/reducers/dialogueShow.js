let initial = {
    toggle: false,
    heading: "head",
    body: "body"
}

const dialogueShow = (state=initial, action) => {
    switch (action.type) {
        case "TOGGLE_BOX_TRUE":
           return state = {...state, toggle: true, heading: action?.head, body: action?.body} 

        case "TOGGLE_BOX_FALSE":
            return state = {...state, toggle: false}
    
        default:
            return state;
    }
}

export default dialogueShow