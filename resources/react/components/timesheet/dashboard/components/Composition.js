import React from "react";
import { Link } from "react-router-dom";

const Composition = ({
	composition,
	composer
}) => {
	const editHandler = (el) => {
		console.log("editHandler button clicked.");
	};

	const deleteHandler = (el) => {
		console.log("deleteHandler button clicked.");
	};

	const viewCompositionsHandler = (el) => {
		//console.log("viewCompositionsHandler:");
		//console.log(el.target);
	};

	const hoverHandler = (el) => {
		// local vars
		let primaryBtn, secondaryBtn;

		// set vars
		primaryBtn = $(el.target).closest(".composer-item").find(".btn-outline-light");
		secondaryBtn = $(el.target).closest(".composer-item").find(".btn-outline-secondary");

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
		// local vars
		let primaryBtn, secondaryBtn;

		// set vars
		primaryBtn = $(el.target).closest(".composer-item").find(".btn-outline-primary");
		secondaryBtn = $(el.target).closest(".composer-item").find(".btn-outline-warning");

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
		console.log(composition);
		console.log(isAudiotrackValid());
	};

	const isAudiotrackValid = () => {
		return (composition.audiotracks.length > 0);
	};

	return (
		<div className="composer-item">
			<div className="container">
				<div className="composer-card" onMouseOver={hoverHandler} onMouseOut={noHoverHandler}>
					<div className="composer-body">
						<img className="composer-img" src={window.location.origin+"/storage/"+composition.image} alt={composition.title} />
						<div className="composer-data">
							<ul className="list-group list-group-flush">
								<li className="list-group-item"><h4 className="track-name">{composition.title}</h4></li>
								<li className="list-group-item">
									<div className="column-container">
										<span className="item-label">Instruments:</span> 
										<div className="container">
											{composition.instruments}
										</div>
									</div>
								</li>
								<li className="list-group-item"><span className="item-label">Image:</span> {composition.image}</li>
								<li className="list-group-item"><span className="item-label"># Movements:</span> {composition.num_movements}</li>
								<li className="list-group-item"><span className="item-label">Total Time:</span> {composition.total_time} minutes</li>
								<li className="list-group-item"><span className="item-label">Year:</span> {composition.year}</li>
								<li className="list-group-item"><span className="item-label">Category:</span> {composition.category.name}</li>
								<li className="list-group-item">
									<div className="row-container center-vertical">
										<div>
											<span className="item-label">Audio Tracks:</span> {composition.audiotracks.length}
										</div>

										<div>
											<Link to={"/composer/dashboard/compositions/"+composition.id+"/audiotracks"} onClick={clickHandler}>	
												{
													!isAudiotrackValid()
													?
													<button className="btn btn-outline-success btn-sm">add audiotrack</button>
													:
													<button className="btn btn-outline-secondary btn-sm">view audiotracks</button>
												}
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
											<Link to={"#"} onClick={clickHandler}>	
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
							<button onClick={viewCompositionsHandler} className="btn btn-outline-light btn-sm">Update Composition</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Composition;
