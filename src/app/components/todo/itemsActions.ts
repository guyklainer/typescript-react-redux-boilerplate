import IAction from "../../commons/iAction";
import { TodoItemActionTypeEnum } from "./todoItemActionTypeEnum";

class ItemsActions {
    static add(text: string): IAction<TodoItemActionTypeEnum, string> {
        let action = {
            type: TodoItemActionTypeEnum.ADD,
            payload: text
        };
        
        return action;
    }
}

export default ItemsActions;