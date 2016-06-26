
import React from "react";

import Article from "./Article";
//store imports
import TrickStore from "../Stores/TrickStore";
//actions import
import * as TrickActions from "../Actions/TrickActions";

export default class Featured extends React.Component{
	constructor(){
		super();
		this.getTricks = this.getAllTricks.bind(this);
		this.state = {
			tricks: TrickStore.getAll(),
		};
	}
	//happens once
	componentWillMount(){
		//ALWAYS UNBBIND
		TrickStore.on("change", this.getTricks);
		console.log("count", TrickStore.listenerCount("change"));
	}

	componentWillUnmount(){
		//ALWAYS UNBBIND
		TrickStore.removeListener("change", this.getTricks);
	}
	getAllTricks(){
		this.setState({tricks:TrickStore.getAll()});
	}
	addTrick(){
		TrickActions.addTrick("Mike", "Love");
	}
	reloadTricks(){
		TrickActions.reloadTricks();
	}

	render(){
	const {tricks} = this.state;
	const articles = tricks.map((trick) => {return <Article description= {trick.description} title = {trick.name} key={trick.id} />;});
		return (
			<div>
				<h2 className="main">Featured</h2>
				<button onClick={this.reloadTricks.bind(this)} className="btn btn-success">Add Trick</button>
				<div class="row">
					{articles}
				</div>

			</div>

		);
	}
}