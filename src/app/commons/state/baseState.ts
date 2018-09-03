
export default class BaseState {
    constructor(state?: any) {
        if (state) {
            if(state instanceof Object){
                return {...state} as BaseState;
            
            } else {
                return state;
            }

        } else {
            return this;
        }
    }
}