import * as React from "react";
import { Button, Intent, Spinner } from '@blueprintjs/core';
import Hello from './components/Hello'

interface IAppProps {
    name: String
}

interface IAppState {
}

export default class App extends React.Component<IAppProps, IAppState> {
   render() {
    const mySpinner = <Spinner intent={Intent.PRIMARY} />;
    const btn = <Button icon="cloud" text="my texxt"/>;
    const hello = <Hello framework="rocket"/>

    return <div>
            {btn}
            {mySpinner}
            <h1>This is {this.props.name} first React app with11 {this.state ? this.state : "No State"}</h1>
            {hello}
        </div>
   }
}