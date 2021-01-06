import React, { useState, useEffect } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import AudiotrackList from "./components/AudiotrackList";
import "./styles/composerDashboard.css";

function AudiotrackApp ({apiKey, apiUrl}) {
	// state vars
	const [audiotracks, setAudiotracks] = useState([]);
	const [composition, setComposition] = useState([]);
	const [composer, setComposer] = useState([]);

	const { composition_id } = useParams();
	const { path, url } = useRouteMatch();

	// use effect
	useEffect(()=>{
		getAudiotracks();
		getComposition();
	}, []);

	const getComposer = (id) => {
		// make connection
		fetch(apiUrl+"composers/"+id, {
			"method": "GET",
			"headers": {
				"Authorization": "Bearer "+apiKey,
				"Content-Type": "application/json",
				"Accept": "application/json",
                "Referer": location.origin,
			}
		})
		.then(response => response.json())
		.then(response => {
			setComposer(response);
			//console.log(response);
		})
		.catch(err => {
			console.log(err);
		});
	};

	const getComposition = () => {
		// make connection
		fetch(apiUrl+"compositions/"+composition_id, {
			"method": "GET",
			"headers": {
				"Authorization": "Bearer "+apiKey,
				"Content-Type": "application/json",
				"Accept": "application/json",
                "Referer": location.origin,
			}
		})
		.then(response => response.json())
		.then(response => {
			setComposition(response);
			//console.log(response);
			getComposer(response.composer_id);
		})
		.catch(err => {
			console.log(err);
		});
	};

	const getAudiotracks = () => {
		// make connection
		fetch(apiUrl+"compositions/"+composition_id+"/audiotracks", {
			"method": "GET",
			"headers": {
				"Authorization": "Bearer "+apiKey,
				"Content-Type": "application/json",
				"Accept": "application/json",
                "Referer": location.origin,
			}
		})
		.then(response => response.json())
		.then(response => {
			setAudiotracks(response);
			//console.log(response);
		})
		.catch(err => {
			console.log(err);
		});
	};

	const isAudiotrackValid = () => {
		return (audiotracks.length > 0);
	};

	return (
		<div className="container">
			<h3>Audiotracks Listing Container for {composer.name}</h3>

			<div className="content">
				{
					!isAudiotrackValid()
						?
						<p>There are no audiotracks to display.</p>
						:
						<AudiotrackList
							audiotracks={audiotracks}
							composition={composition}
							composer={composer}
						/>
				}
			</div>
		</div>
	);
};

export default AudiotrackApp;
