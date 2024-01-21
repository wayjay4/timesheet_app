import React, { useState, useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import CompositionList from './components/CompositionList';
import "./styles/composerDashboard.css";

function CompositionApp ({apiKey, apiUrl}) {
    // state vars
    const [composer, setComposer] = useState({});
    const [compositions, setCompositions] = useState([]);
    const [compositionAudioTracks, setCompositionAudioTracks] = useState([]);

    const { composer_id } = useParams();
    const { path, url } = useRouteMatch();

    // use effect
    useEffect(()=>{
        getComposer();
        getCompositions();
    }, []);

    const getComposer = () => {
        // make connection
        fetch(apiUrl+"composers/"+composer_id, {
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

    const getCompositions = () => {
        // make connection
        fetch(apiUrl+"composers/"+composer_id+"/compositions", {
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
            setCompositions(response);
            //console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
    };

    const getCompositionAudioTracks = (composition, nextStep=null) => {
        // make connection
        fetch(apiUrl+"compositions/"+composition.id+"/audiotracks", {
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
            setCompositionAudioTracks(response);
            nextStep();
        })
        .catch(err => {
            console.log(err);
        });
    };

    const isCompositionsValid = () => {
        return (compositions.length > 0);
    };

    return (
        <div className="container">
            <h3>Compositions Listing Container for {composer.name}</h3>

            <div className="content">
                {
                    !isCompositionsValid()
                        ?
                        <p>There are no compositions to display.</p>
                        :
                        <CompositionList 
                            compositions={compositions}
                            composer={composer}
                        />
                }
            </div>
        </div>
    );
}

export default CompositionApp;
