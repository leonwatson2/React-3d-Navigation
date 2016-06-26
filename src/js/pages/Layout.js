
import React from "react";
import Navigation from '../components/Navigation';
import {Link } from "react-router";

export default class Layout extends React.Component{
	constructor(){
		super();
		this.state =  {navSettings:{open:false, active:{name:"Archives", id:1}}};
	}
	toggleNav(activePage = this.state.navSettings.active){
		var isOpen = this.state.navSettings.open;
		console.log(activePage);
		this.setState({navSettings:{open:!isOpen, active: activePage}});
		
	}
	navigate(){
		this.props.history.pushState(null, "/");
	}
	render(){
		const {navSettings} = this.state;
		const openNav = navSettings.open;
		const mainClasses = openNav ? "container nav-is-visible" : "container";
		const toggleNav = this.toggleNav.bind(this);
		return (
			<div>
				<Navigation toggleNav = {toggleNav} navSettings = {navSettings}/>
				<main className = {mainClasses}>
				<div className = "row">
				<div className = "col-xs-12">
					<h1><Link to="/">React</Link></h1>
					{this.props.children}
				</div>
				</div>
				</main>
			</div>
		);
	}
}