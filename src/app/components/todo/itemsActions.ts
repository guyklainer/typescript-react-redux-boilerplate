import IAction from "../../commons/iAction";
import {TodoItemActionTypeEnum} from "./todoItemActionTypeEnum";

class ItemsActions {
	static add(text: string): IAction<TodoItemActionTypeEnum, string> {
		return {
			type   : TodoItemActionTypeEnum.ADD,
			payload: text
		};
	}

	static complete(value: number): IAction<TodoItemActionTypeEnum, number> {
		return {
			type   : TodoItemActionTypeEnum.COMPLETE,
			payload: value
		};
	}

	static pending(value: number): IAction<TodoItemActionTypeEnum, number> {
		return {
			type   : TodoItemActionTypeEnum.PENDING,
			payload: value
		};
	}

	static delete(value: number): IAction<TodoItemActionTypeEnum, number> {
		return {
			type   : TodoItemActionTypeEnum.REMOVE,
			payload: value
		};
	}
}

export default ItemsActions;