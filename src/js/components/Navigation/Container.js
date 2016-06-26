
import React from "react";

import NavLink from "./Container/NavLink";

export default class Container extends React.Component{
	constructor(){
		super();
		
	}
	
	
	render(){
		const {props} = this;
		const {active} = props.navSettings;
		const {list} = props;
		const visible = props.navSettings.open;
		const toggleNav = props.toggleNav.bind(this);
		const navClassNames = visible ? "cd-3d-nav-container nav-is-visible": "cd-3d-nav-container";
		const markerClassNames = "cd-marker color-" + active.id;
		const navigationLinks = list.map((link, i) => <NavLink name={link.name} url={link.url} active={active} toggleNav={toggleNav} num={i+1} key={i} />);
		return (
			<nav className={navClassNames} >
			<ul className="cd-3d-nav">
				{navigationLinks}
			</ul>

			<span className={markerClassNames}></span>	
		</nav> 

		);
	}
}