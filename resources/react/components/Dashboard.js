import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TimesheetApp from './timesheet/dashboard/TimesheetApp';
//import CompositionApp from './timesheet/dashboard/CompositionApp';
//import AudiotrackApp from './timesheet/dashboard/AudiotrackApp';

function App(){
	// state vars
    const [apiKey, setApiKey] = useState("oSkc4NIggFkYTG5EqLyBqrUHH2ANGN01tNRzLrbW");
    const [apiUrl, setApiUrl] = useState(location.origin+"/api/");

    // use effect
    useEffect(() => {
    	// do something
    }, []);

	return(
		<div className="container">
			<h2 hidden>Dashboard API Container</h2>

			<Switch>
				<Route path='/dashboard/timesheets/'>
					<TimesheetApp 
						apiKey={apiKey}
						apiUrl={apiUrl}
					/>
				</Route>
			</Switch>
		</div>
	);
}

if(document.getElementById('timesheet-dashboard')){
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('timesheet-dashboard'));
}
