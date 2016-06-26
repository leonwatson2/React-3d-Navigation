
import React from "react";

import Article from "./Article";

export default class Archives extends React.Component{
	
	render(){
		const randArts = function(num = 27){
			var str= [];
			for (var i = 0; i < num; i++) {
				str.push("Article "+ i);
			}
			return str;
		}
		const articles = randArts(45).map((title, i) => <Article key={i} title={title}/>);
		const { params } = this.props;
		const { query } = this.props.location;
		const { article } = params;
		const { date, filter } = query;
		const title = article ? (" | " + article) : "" ;
		return (
			<div>
				<h2 className="main">Archives {title}</h2>
				{date!=null ? "<h3>Date: { date }</h3>" : ""}
				<div class="row">
					{articles}
				</div>

			</div>

		);
	}
}