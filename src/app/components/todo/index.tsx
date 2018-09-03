import {Button, Intent, Spinner} from "@blueprintjs/core";
import * as React from "react";
import ItemsActions from "./itemsActions";
import TodoItemsProps from "./todoItemsProps";
import connect from "../../commons/connect";
import TodoItem from "./todoItem";

interface TodoInternalState {
	text: string
}

class TodoList extends React.Component<TodoItemsProps, TodoInternalState> {
	private static DEFAULT_STATE = {text: ''} as TodoInternalState;

	constructor(props: TodoItemsProps, context: any) {
		super(props, context);
		this.state = TodoList.DEFAULT_STATE;
	}

	initState() {
		this.setState(TodoList.DEFAULT_STATE);
	}

	render() {
		const list = this.buildList();

		return <React.Fragment>
			{list}
			<input value={this.state.text} onChange={(e) => this.onInputChanged(e)} type="text"/>
			<Button onClick={() => this.addItem()} icon="plus" text="Add"/>
		</React.Fragment>;
	}

	addItem() {
		this.props.dispatch(ItemsActions.add(this.state.text));
		this.initState();
	}

	onInputChanged(e: any) {
		this.setState({text: e.target.value});
	}

	private buildList() {
		const spinner           = <Spinner intent={Intent.SUCCESS}/>;
		const items: TodoItem[] = this.props.items;
		const listItems         = items.map(item =>
			<li key={item.id}>
				{item.value}
				{item.done ? item.done : spinner }
			</li>);

		return <ul>{listItems}</ul>;
	}
}

export default connect(TodoList, "items");