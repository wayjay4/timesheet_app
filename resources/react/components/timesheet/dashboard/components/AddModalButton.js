import React from "react";

const AddModalButton = ({targettimesheet, handleModalButtonClick}) => {
	let newButton = <div className="btn-group" role="group">
					    <button 
					    	type="button"
					    	className="btn btn-primary btn-sm"
					    	data-toggle="modal"
					    	data-target={"#addTimeModal-fake"}
					    	data-targettimesheet={targettimesheet} 
					    	onClick={handleModalButtonClick}
					    >
			                Add Timesheet Record
			            </button>
				    </div>;

    return (newButton);
};

export default AddModalButton;