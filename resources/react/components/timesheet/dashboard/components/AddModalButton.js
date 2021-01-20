import React from "react";

const AddModalButton = ({timesheet, validateTimesheetHeaderData}) => {
	let newButton = <div className="btn-group" role="group">
					    <button 
					    	type="button" 
					    	className="btn btn-primary btn-sm" 
					    	data-toggle="modal" 
					    	data-target={"#addTimeModal-"+timesheet.id}
					    	onClick={validateTimesheetHeaderData}
					    >
					      Add Timesheet Record
					    </button>
				    </div>;

    return (newButton);
};

export default AddModalButton;