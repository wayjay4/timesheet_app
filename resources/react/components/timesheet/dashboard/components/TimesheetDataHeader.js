import React from "react";

const TimesheetDataHeader = ({
	data
}) => {
    return (
		<div className="container">
			<div className="row">
				<div className="col-sm">
					<h5 className="text-center" style={{"color": "orange"}}>{data}</h5>
				</div>
			</div>
		</div>
	);
};

export default TimesheetDataHeader;
