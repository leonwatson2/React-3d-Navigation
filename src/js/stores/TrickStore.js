import {EventEmitter} from "events";

//dispatcher import
import Dispatcher from "../dispatcher";

class TrickStore extends EventEmitter{
	constructor(){
		super();
		this.tricks = [
				{
					id:4567,
					name:"N-Box",
					description:"lorem",
					prereqs:["Box", "Zip"]
				},
				{
					id:4568,
					name:"Z-Box",
					description:"lorem",
					prereqs:["Box", "N-Box"]
				}				
				];
	}//construtor
	addTrick(trickName, trickDescription){
		const id = Date.now();
		this.tricks.push({id:id, name:trickName, description:trickDescription});
		this.emit("change");
	}

	getAll(){
		return this.tricks;
	}
	handleAction(actions){
		switch(actions.type){
			case "ADD_TRICK": this.addTrick(actions.name, actions.description);
			break;
			case "RECEIVED_TRICKS": this.tricks = actions.tricks;
			this.emit("change");
			break;
		}
	}
}

const trickStore = new TrickStore;
Dispatcher.register(trickStore.handleAction.bind(trickStore));

window.Dispatcher = Dispatcher;
window.TrickStore = trickStore;
export default trickStore;