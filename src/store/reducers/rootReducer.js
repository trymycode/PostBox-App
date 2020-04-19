import authReducer from "./authReducer";
import commentReducer from "./commentReducer";
import postReducer from "./postReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    authReducer:authReducer,
    postReducer:postReducer,
    commentReducer:commentReducer
});
export default rootReducer;
