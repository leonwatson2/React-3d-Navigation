import axios from "axios";
import dispatcher from "../dispatcher";

export function addTrick(trickName, tdescription){
	dispatcher.dispatch({
		type: "ADD_TRICK",
		name: trickName,
		description: tdescription
	});
}
export function deleteTrick(trickId){
	dispatcher.dispatch({
		type: "DELETE_TRICK",
		id: trickId
	});
}

export function reloadTricks(){
	axios.get('js/data/tricks.json')
		.then((r) => {
			dispatcher.dispatch({
				type:"RECEIVED_TRICKS",
				tricks:r.data
			})
		}).catch((error)=>{
			dispatcher.dispatch({
				type:"ERROR_TRICKS",
				error:error
			})
		});
	dispatcher.dispatch({
		type:"FETCHING_TRICKS"
	});
}