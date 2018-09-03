import BaseState from "./baseState";

export default class DispachedState extends BaseState {
    dispatch: any;

    constructor(state: any) {
        super(state);  
    }
}