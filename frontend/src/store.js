import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// REDUCERS
import { todosReducers, todoReducer } from "./redux/todoReducers";

const reducer = combineReducers({
  todos: todosReducers,
  todo: todoReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
