import React from "react";
import { Link } from "react-router-dom";
import Trackdata from "./Trackdata";

const Audiotrack = ({audiotrack, composition, composer}) => {
	const editHandler = (el) => {
		console.log("editHandler button clicked.");
	};

	const deleteHandler = (el) => {
		console.log("deleteHandler button clicked.");
	};

	const viewAudiotracksHandler = (el) => {
		console.log("viewAudiotrackHandler:");
	};

	const hoverHandler = (el) => {
		// set vars
		let primaryBtn = $(el.target).closest(".composer-item").find(".btn-outline-light");
		let secondaryBtn = $(el.target).closest(".composer-item").find(".btn-outline-secondary");

		// swap primary button styles
		for(let i=0; i<primaryBtn.length; i++){
			$(primaryBtn[i]).removeClass("btn-outline-light").addClass("btn-outline-primary");
		}

		// swap secondary button styles
		for(let i=0; i<secondaryBtn.length; i++){
			$(secondaryBtn[i]).removeClass("btn-outline-secondary").addClass("btn-outline-warning");
		}
	};

	const noHoverHandler = (el) => {
		// set vars
		let primaryBtn = $(el.target).closest(".composer-item").find(".btn-outline-primary");
		let secondaryBtn = $(el.target).closest(".composer-item").find(".btn-outline-warning");

		// swap primary button styles
		for(let i=0; i<primaryBtn.length; i++){
			$(primaryBtn[i]).removeClass("btn-outline-primary").addClass("btn-outline-light");
		}

		// swap secondary button styles
		for(let i=0; i<secondaryBtn.length; i++){
			$(secondaryBtn[i]).removeClass("btn-outline-warning").addClass("btn-outline-secondary");
		}
	};

	const clickHandler = (el) => {
		//console.log("clickHandler:");
		//console.log(el.target);
		console.log(audiotrack);
		console.log(composition);
		console.log(composer);
	};

	const isAudioDetailsValid = () => {
		return (audiotrack.trackdetails.length > 0);
	};

	return (
		<div className="composer-item">
			<div className="container" onClick={clickHandler}>
				<div className="composer-card" onMouseOver={hoverHandler} onMouseOut={noHoverHandler}>
					<div className="composer-body">
						<img className="img-thumbnail card-img-top" src={window.location.origin+"/storage/"+audiotrack.image} alt={audiotrack.name} />
						<div className="composer-data">
							<div className="audio-player-container">
								<audio controls>
									<source src={window.location.origin+"/storage/"+audiotrack.audio} type="audio/mpeg" />
									Your browser does not support the audio element.
								</audio>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item"><h4 className="track-name">{audiotrack.name}</h4></li>
								<li className="list-group-item">
									<span className="item-label">Track Data:</span>
									<Trackdata trackdetails={audiotrack.trackdetails} />
								</li>
								<li className="list-group-item"><span className="item-label">Description:</span> <div className="container">{audiotrack.description}</div></li>
								<li className="list-group-item">
									<div className="row-container center-vertical">
										<div className="column-container">
											<span className="item-label">Composition:</span> 
											<div className="container">{composition.title}</div>
										</div>

										<div>
											<Link to="#">	
												<button className="btn btn-outline-secondary btn-sm">view composition</button>
											</Link>
										</div>
									</div>
								</li>
								<li className="list-group-item">
									<div className="row-container center-vertical">
										<div className="column-container">
											<span className="item-label">Composer:</span> 
											<div className="container">{composer.name}</div>
										</div>

										<div>
											<Link to="#" onClick={clickHandler}>	
												<button className="btn btn-outline-secondary btn-sm">view composer</button>
											</Link>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>

					<div className="btn-container">
						<div className="btn-group">
							<button className="btn btn-outline-light btn-sm">Update Audiotrack</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Audiotrack;





/*<li className="list-group-item"><span className="item-label">Track Data:</span> {audiotrack.trackdetails}</li>*/

/*

<div class="play_me">
@foreach($comp['audio_files'] as $audio_file)
  <div class="div_trackData">
    <a class="audio_track" href="{{ $audio_file }}">
      <i class="material-icons" href="{{ $audio_file }}" style="position:relative; font-size:50px;">play_circle_outline</i>
      <span style="position:relative; top:-18px;">{{ strtolower(basename($audio_file)) }}</span>
    </a>
  </div>
@endforeach
</div>




<div id="div_audioplayer" hidden>
	<audio id="audio_player" controls loop preload hidden style="display:inline-block; margin:15px; height:30px;">
		<source id="audio_source" src="http://breiprich_react_8600.test/music/xchamber/old_pond.mp3" type="audio/mpeg">
		Error: your web browser does not support this audio player.
	</audio>
	<div id="div_track">
		<span id="track_name"></span>
	</div>
</div>



<div id="comp_media_player" align="center">
</div>


<script>
  $(document).ready(function($){
    var myDiv2Para = $("#div_audioplayer").detach();
    myDiv2Para.appendTo('#comp_media_player');
  });
</script>


*/