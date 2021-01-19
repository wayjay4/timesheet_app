import React from "react";

const AddModalButton = ({
	timesheet
}) => {
    return (
	    <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target={"#addTimeModal-"+timesheet.id}>
	      Add Timesheet
	    </button>
	);
};

export default AddModalButton;