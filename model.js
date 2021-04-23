export default class Model {
	constructor(){
		this.view= null;
		this.todos=[];
		this.currentId=1;
	}

	setView(view){
		this.view= view;
	}

	getTodo(){
		return this.todos;
	}

	addTodo(title, description){
		const todo={
			id=this.currentId++,
			title,
			description,
			completed:false,
		}

		this.todos.push(todo);
		console.log(this.todos);

		return {...todo};
		}
	
}
