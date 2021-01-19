import React from "react";

const EditModalButton = ({
	timesheet
}) => {
    return (
	    <button 
	    	type="button" 
	    	className="btn btn-outline-warning btn-sm" 
	    	data-toggle="modal" 
	    	data-target={"#addTimeModal-"+timesheet.id}
	    >
	      Edit Timesheet Record
	    </button>
	);
};

export default EditModalButton;