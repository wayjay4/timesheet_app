import React from "react";

const TimesheetData = ({
	timesheet, data
}) => {
    return (
		<div className="container">
			<div className="row">
				<div className="col-sm">
					{data}
				</div>
			</div>
		</div>
	);
};

export default TimesheetData;
