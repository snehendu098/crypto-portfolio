import { combineReducers } from "redux";
import authShow from "./reducers/authShow";
import dialogueShow from "./reducers/dialogueShow";
import navExp from "./reducers/navExp";
import networkShow from "./reducers/networkShow";
import themeReducer from "./reducers/theme";

const root = combineReducers({
    dark: themeReducer,
    expanded : navExp,
    connectors: authShow,
    networks: networkShow,
    modal: dialogueShow
})

export default root