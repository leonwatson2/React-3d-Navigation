import React from "react";
import ReactDOM from "react-dom"; //rendering engine
import {Router, Route, IndexRoute, hashHistory} from "react-router";




import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

//Render layout into app  
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Featured}></IndexRoute> //default
			<Route path="archives(/:article)" name="archives" component={Archives}></Route>
			<Route path="settings" name="settings" component={Settings}></Route>
		</Route>
	</Router>, app);
