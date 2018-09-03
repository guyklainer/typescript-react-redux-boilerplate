import * as React from "react";
import TodoList from "./components/todo";

export default class App extends React.Component {
	render() {
		return <React.Fragment>
			<h1>This is first my React app</h1>
			<TodoList />
		</React.Fragment>
	}
}