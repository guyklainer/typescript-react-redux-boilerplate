import TodoItem from "./todoItem";
import { Dispatch } from "redux";
import IAction from "../../commons/iAction";
import { TodoItemActionTypeEnum } from "./todoItemActionTypeEnum";

type TodoItemsProps = {
	items: TodoItem[],
	dispatch: Dispatch<IAction<TodoItemActionTypeEnum, any>>
};
export default TodoItemsProps;