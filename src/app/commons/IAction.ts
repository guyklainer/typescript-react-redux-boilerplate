import {Action} from "redux";

interface IAction<E, T> extends Action<E> {
	type: E;
	payload: T;
}

export default IAction;