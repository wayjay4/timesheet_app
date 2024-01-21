import React from "react";

const TimesheetData = ({
	data
}) => {
    return (
		<div className="container">
			<div className="row">
				<div className="col-sm">
					<p className="text-center text-capitalize">{data}</p>
				</div>
			</div>
		</div>
	);
};

export default TimesheetData;
