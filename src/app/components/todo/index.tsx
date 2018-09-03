import {Button, Checkbox, Icon, Intent, Spinner} from "@blueprintjs/core";
import {IconNames} from "@blueprintjs/icons";
import * as React from "react";
import ItemsActions from "./itemsActions";
import TodoItemsProps from "./todoItemsProps";
import connect from "../../commons/connect";
import TodoItem from "./todoItem";

interface TodoInternalState {
	text: string
}

class TodoList extends React.Component<TodoItemsProps, TodoInternalState> {
	private static DEFAULT_STATE: TodoInternalState = {text: ''};

	constructor(props: TodoItemsProps, context: any) {
		super(props, context);
		this.state = TodoList.DEFAULT_STATE;
	}

	initState() {
		this.setState(TodoList.DEFAULT_STATE);
	}

	handleKeyPress(event: any) {
		if (event.key == "Enter") {
			this.addItem();
		}
	}

	addItem() {
		if (this.state.text) {
			this.props.dispatch(ItemsActions.add(this.state.text));
			this.initState();
		}
	}

	deleteItem(item: TodoItem){
		this.props.dispatch(ItemsActions.delete(item.id));
	}

	itemStateChanged(e: any, item: TodoItem) {
		if (e.target.checked) {
			this.props.dispatch(ItemsActions.complete(item.id));
		} else {
			this.props.dispatch(ItemsActions.pending(item.id));
		}
	}

	onInputChanged(e: any) {
		this.setState({text: e.target.value});
	}

	private buildList() {
		const items: TodoItem[] = this.props.items;
		const listItems         = items.map(item => this.buildToDoItem(item));

		return <ul>{listItems}</ul>;
	}

	private buildToDoItem(item: TodoItem) {
		return <li key={item.id}>
			<Checkbox checked={item.done} onChange={(e) => this.itemStateChanged(e, item)}>
				{item.value}
				{item.done ?
					<Icon className="ml-1" icon={IconNames.TRASH} onClick={() => this.deleteItem(item)} iconSize={Icon.SIZE_LARGE}
						  intent={Intent.DANGER}/> : ""}
			</Checkbox>
		</li>
	}

	private buildTodoInput() {
		const spinner = <Spinner intent={Intent.SUCCESS}/>;

		return <React.Fragment>
			<input value={this.state.text} onKeyPress={(e) => this.handleKeyPress(e)}
				   onChange={(e) => this.onInputChanged(e)} type="text"/>
			<Button onClick={() => this.addItem()} icon={IconNames.PLUS} text="Add"/>
			{spinner}
		</React.Fragment>
	}

	render() {
		const list  = this.buildList();
		const input = this.buildTodoInput();

		return <React.Fragment>
			{list}
			{input}
		</React.Fragment>;
	}
}

export default connect(TodoList, "items");