import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";
import "./App.scss";
import SuspectInteraction from './pages/suspectInteraction/suspectInteraction';
import SuspectAssociationVideos from './pages/suspectAssociationVideos/suspectAssociationVideos';
import UploadComponent from './pages/upload/upload';
import GroupByLocation from './pages/groupByLocation/groupByLocation';

function App() {
	return (
		<html>
		  <head>
		  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
		  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
		  <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"/>
		  </head>
		  <body>
	
		  <Switch>
			 <Route exact path="/" component={UploadComponent}/>
			  <Route exact path="/upload" component={UploadComponent}/>
			  <Route exact path="/suspectInteraction" component={SuspectInteraction}/> 
			  <Route exact path="/suspectInteraction/groupbylocation" component={GroupByLocation}/> 
			  <Route exact path="/suspectAssociationVideos" component={SuspectAssociationVideos}/>
			</Switch>
	
		  </body>
		</html>
	  );
	}
	
export default App;