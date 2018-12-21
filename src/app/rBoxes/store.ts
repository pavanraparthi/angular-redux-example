export interface ITodo {
	id: number;
	description: string;
	assignedTo: string;
	priority: string;
	isCompleted: boolean;
}

export interface IAction {
	type: string;
	id ?: string;
	todo ?: ITodo;
}

export interface IAppState {
	todos : ITodo [];
	lastUpdate: Date;
}

export const ADD_TODO:string = "Add_Todo";
export const UPDATE_TODO:string = "Update_Todo";
export const REMOVE_TODO:string = "Remove_Todo";
export const REMOVE_ALL:string = "Remove_All";

export const APP_INITIAL_STATE:IAppState = {
	todos : [],
	lastUpdate:null
} 

export function rootReducer (state: IAppState , action :IAction) : IAppState{
	switch (action.type) {
		case ADD_TODO:
			// code...
			action.todo.id = state.todos.length + 1;
			return Object.assign({},state,{
				todos:state.todos.concat(Object.assign({},action.todo)),
				lastUpdate: new Date()
			});
		case UPDATE_TODO:
			let todo = state.todos.find(t => t.id === action.todo.id);
			let index = state.todos.indexOf(todo);
			todo.isCompleted = !todo.isCompleted;
			return Object.assign({},state, {
				todos:[...state.todos.slice(0, index),
				todo,
				...state.todos.slice(index+1)],
				lastUpdate: new Date()
			})
		case REMOVE_TODO:
			return Object.assign({},state,{
				todos:state.todos.filter(t => t.id != action.todo.id),
				lastUpdate: new Date()
			});
		case REMOVE_ALL:
			return Object.assign({},state,{
				todos:[],
				lastUpdate: new Date()
			});
		default:
			// code...
			break;
	}
	return state;
}