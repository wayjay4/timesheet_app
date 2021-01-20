import React from "react";

const AddModalButton = ({timesheet}) => {
	let newButton = <div className="btn-group" role="group">
					    <button 
					    	type="button" 
					    	className="btn btn-primary btn-sm" 
					    	data-toggle="modal" 
					    	data-target={"#addTimeModal-"+timesheet.id}
					    >
					      Add Timesheet Record
					    </button>
				    </div>;

    return (newButton);
};

export default AddModalButton;