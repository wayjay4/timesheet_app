import React from "react";

const EditModalButton = ({timesheet, deleteRecordHandler, validateTimesheetHeaderData}) => {
	let newButton = <div className="btn-group" role="group">
					    <button 
					    	type="button" 
					    	className="btn btn-outline-warning btn-sm" 
					    	data-toggle="modal" 
					    	data-target={"#addTimeModal-"+timesheet.id}
					    	onClick={validateTimesheetHeaderData}
					    >
					      Edit Timesheet Record
					    </button>
		    			<button 
		    				type="button" 
		    				className="btn btn-outline-danger btn-sm" 
		    				data-ts={timesheet.id} 
		    				onClick={deleteRecordHandler}
		    			>
		    				Delete Timesheet Record
		    			</button>
				    </div>;

    return (newButton);
};

export default EditModalButton;