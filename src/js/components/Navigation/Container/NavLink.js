
import React from "react";
import {Link } from "react-router";


export default class NavLink extends React.Component{
	toggleNav(e){
		this.props.toggleNav({name:this.props.name, id:this.props.num});
	}

	constructor(){
		super();
	}

	render(){
		const {props} = this;
		const {name} = props;
		const {url} = props;
		const {active} = props;
		const {toggleNav} = props;
		return (
				<li class={active.name == name ? "cd-selected": ""}>
					<Link to={url} onClick={this.toggleNav.bind(this)}>{name}</Link>
				</li>
		);
	}
}