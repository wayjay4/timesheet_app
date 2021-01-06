import React from "react";
import { Link } from "react-router-dom";

class Trackdata extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render() 
	{
		const addButton = (
			<div className="container btn-container">
				<Link to="#">
					<div className="btn-group">
						<button className="btn btn-outline-secondary btn-sm">Add Track Data</button>
					</div>
				</Link>
			</div>
			);


		return !(this.props.trackdetails.length > 0)
			?
			addButton
			:
			<div className="container">
				<ul className="list-disc">
					{
						this.props.trackdetails.map((trackdetail)=>{
						return <li key={trackdetail.id}>{trackdetail.text}</li>
						})
					}
				</ul>
			</div>
	}

}

export default Trackdata;