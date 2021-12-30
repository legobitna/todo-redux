import { combineReducers } from "redux";

import todosReducer from "./todosReducer";
import filtersReducer from "./filtersReducer";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer,
});

export default rootReducer;
