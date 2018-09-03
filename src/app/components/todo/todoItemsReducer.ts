import IAction from "../../commons/iAction";
import {TodoItemActionTypeEnum} from "./todoItemActionTypeEnum";
import TodoItem from "./todoItem";

export default function TodoItemsReducer(state: TodoItem[] = [], action: IAction<TodoItemActionTypeEnum, any>): TodoItem[] {
	let newState: TodoItem[] = [...state];

	switch (action.type) {
		case TodoItemActionTypeEnum.COMPLETE:
			newState.find(item => item.id == action.payload).done = true;
			break;

		case TodoItemActionTypeEnum.PENDING:
			newState.find(item => item.id == action.payload).done = false;
			break;

		case TodoItemActionTypeEnum.ADD:
			let newItem = new TodoItem(newState.length, action.payload);
			newState.push(newItem);
			break;

		case TodoItemActionTypeEnum.REMOVE:
			let itemIndex = newState
				.map((item, index) => item.id == action.payload ? index : null)
				.find(item => item !== null);

			newState.splice(itemIndex, 1);
	}

	return newState;
}