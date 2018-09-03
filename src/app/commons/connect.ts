import {connect} from "react-redux";

const mapState = (names: string | Array<string>) => {
	return (store: any) => {
		let result: any = {};

		if (typeof names == "string") {
			names = [names];
		}

		names.forEach(name => result[name] = store[name]);

		return result;
	}
}

export default (component: any, name: string) => {
	return connect(
		mapState(name)
	)(component);
}