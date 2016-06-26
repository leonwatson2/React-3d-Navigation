import React from "react";



export default class Header extends React.Component{
	toggleNav(){
		this.props.toggleNav();
	}

	render(){
	const {props} = this;
	const {visible} = props;
	const headerClasses = visible ? "cd-header nav-is-visible" : "cd-header";
		return (
			<div className={headerClasses}>
				<a href="#" className="cd-logo">
					<img src="img/cd-logo.svg" alt="Logo"/>
				</a>
				<a style={{cursor:"pointer"}} className="cd-3d-nav-trigger" onClick={this.toggleNav.bind(this)}>
					<span></span>
				</a>
			</div>
		);
	}
}