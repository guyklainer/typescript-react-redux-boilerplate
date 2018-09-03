
export default class TodoItem {
	id: number;
	value: string;
    done: boolean;
    
    constructor(id: number, value: string) {
        this.id =  id;
        this.value = value;
        this.done = false;
    }
}