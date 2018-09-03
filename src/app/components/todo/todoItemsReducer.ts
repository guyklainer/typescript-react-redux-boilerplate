import IAction from "../../commons/iAction";
import {TodoItemActionTypeEnum} from "./todoItemActionTypeEnum";
import TodoItem from "./todoItem";

export default function TodoItemsReducer(state: TodoItem[] = [], action: IAction<TodoItemActionTypeEnum, any>): TodoItem[] {
	let newState: TodoItem[] = [...state];

	switch (action.type) {
		case TodoItemActionTypeEnum.DONE:
			newState.find(item => item.id == action.payload).done = true;
			break;

		case TodoItemActionTypeEnum.ADD:
			let newItem = new TodoItem(newState.length, action.payload);
			newState.push(newItem);
			break;

		case TodoItemActionTypeEnum.REMOVE:
			newState.splice(action.payload, 1);
	}

	return newState;
}