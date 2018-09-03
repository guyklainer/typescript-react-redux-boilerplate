import {Button, Intent, Spinner} from "@blueprintjs/core";
import * as React from "react";
import TodoList from "./components/todo";

export default class App extends React.Component {
	render() {
		const mySpinner = <Spinner intent={Intent.PRIMARY}/>;
		const btn       = <Button icon="cloud" text="my texxt"/>;
		const todoList  = <TodoList />;

		return <React.Fragment>
			{btn}
			{mySpinner}
			<h1>This is first my React app</h1>
			{todoList}
		</React.Fragment>
	}
}