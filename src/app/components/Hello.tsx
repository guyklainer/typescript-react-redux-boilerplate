import * as React from 'react';
import { Button, Intent, Spinner } from '@blueprintjs/core';

interface IProps {
    framework: string
}

interface IState {
    x: string
}

export default class Hello extends React.Component<IProps, IState> {
   render() {
        const mySpinner = <Spinner intent={Intent.PRIMARY} />;
        const btn = <Button icon="cloud" text="my texxt"/>;
        
        this.timeout();
        return <div>
                {btn}
                <Spinner intent={Intent.PRIMARY} />
                <h1>This is a {this.props.framework} with state {this.state ? this.state.x : "DFG1111"}</h1>
            </div>
   }

   timeout(){
    setTimeout(() => {
        this.setState({x: "ASD"});
    }, 3000);
   }
}