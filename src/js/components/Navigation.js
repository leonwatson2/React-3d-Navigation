
import React from "react";

import Header from "./Navigation/Header";
import Container from "./Navigation/Container";


export default class Navigation extends React.Component{
	constructor(){
		super();
		const list = [ 
			{	name:"Home", url:"/"},
			{	name:"Archives", url:"archives"},
			{	name:"Settings",url:"settings"}
		]
		this.state = {list};
	}
	
	render(){
		const {props} = this;
		const {navSettings} = this.props;
		const {open} = navSettings;
		const {activeLink} = this.props;
		const toggleNav = props.toggleNav.bind(this);
		const {list} = this.state;
		return (
			<div>
			<Header visible={open} toggleNav={toggleNav}/>
			<Container list={list} navSettings={navSettings} toggleNav={toggleNav}/>
			</div>
		);
	}
}