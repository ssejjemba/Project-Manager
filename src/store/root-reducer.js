import { combineReducers } from "redux";
import { boardFragReducer } from "./boardFragment/boardFrag-reducer";
import { appStateReducer } from "./appState/appState-reducer";
import { customModalReducer } from "./modal/modal-reducer";

const rootReducer = combineReducers({
  // user: userReducer,
  appState: appStateReducer,
  boardFragment: boardFragReducer,
  modal: customModalReducer,
});

export default rootReducer;
