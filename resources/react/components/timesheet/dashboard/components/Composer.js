import React from "react";
import { Link } from "react-router-dom";

const Composer = ({
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
		//console.log(el.target.parentElement);
		//let target = el.target.parentElement;
		//target = target.childNodes;
		//target = target[1];
		//target = target.childNodes;
		//target = target[0];
		//target = target.childNodes;
		//target = target[2];


		//$(target).addClass('btn-primary');
		//$(target).removeClass('btn-outline-primary');

		//console.log(target);
		//console.log($(target));
	};

	const noHoverHandler = (el) => {
		//let target = el.target.parentElement;
		//target = target.childNodes;
		//target = target[1];
		//target = target.childNodes;
		//target = target[0];
		//target = target.childNodes;
		//target = target[2];


		//$(target).addClass('btn-outline-primary');
		//$(target).removeClass('btn-primary');
	};

	const clickHandler = (el) => {
		//console.log("hello world");
		//console.log(el.target);
		console.log(composer);
	};

	return (
		<div className="composer-item">
			<Link to={"/composer/dashboard/composer/"+composer.id+"/compositions"} onClick={clickHandler}>
				<div className="container">
					<div className="composer-card" onMouseOver={hoverHandler} onMouseOut={noHoverHandler}>
						<div className="composer-body">
							<img className="composer-img" src={composer.profile_photo_url} alt={composer.name} />
							<div className="composer-data">
								<h6>{composer.name}</h6>
								<p>{composer.email}</p>
							</div>
						</div>

						<div className="btn-container">
							<div className="btn-group">
								<button hidden onClick={editHandler} className="btn btn-outline-warning btn-sm">Edit Composer</button>
								<button hidden onClick={deleteHandler} className="btn btn-outline-danger btn-sm">Delete Composer</button>
								<button hidden onClick={viewCompositionsHandler} className="btn btn-outline-primary btn-sm">View Compositions</button>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Composer;
