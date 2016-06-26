
import React from "react";
 
export default class Article extends React.Component{
	
	render(){
		const classes = ["col-xs-6", "col-sm-4", "col-md-2"];
		const { title } = this.props;
		const description  = this.props.description || "We don't know how to do this trick!";
		return (
			<div class={classes.join(" ")}>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>

		);
	}
}