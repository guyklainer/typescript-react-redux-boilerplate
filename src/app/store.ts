import {applyMiddleware, combineReducers, createStore, ReducersMapObject} from "redux";
import logger from "redux-logger";
import BaseState from "./Commons/state/baseState";
import IAction from "./commons/iAction";
import BaseActionType from "./models/types";
import TodoItemsReducer from "./components/todo/todoItemsReducer";

// Reducers
//--------------
let reducers: ReducersMapObject<BaseState, IAction<BaseActionType, any>> = {
	items: TodoItemsReducer,
};

const combinedReducers = combineReducers<BaseState>(reducers);

// Middlewares
//--------------
const middleware = applyMiddleware(logger);

// Store
//--------------
const store = createStore(combinedReducers, middleware);


export default store;