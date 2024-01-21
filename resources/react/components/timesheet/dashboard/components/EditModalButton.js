import React from "react";

const EditModalButton = ({timesheet, deleteRecordHandler, targettimesheet, handleModalButtonClick}) => {
	let newButton = <div className="btn-group" role="group">
					    <button 
					    	type="button"
					    	className="btn btn-outline-warning btn-sm"
					    	data-toggle="modal"
					    	data-target={"#addTimeModal-fake"}
					    	data-targettimesheet={targettimesheet} 
					    	onClick={handleModalButtonClick}
					    >
					      Edit Record
					    </button>
		    			<button 
		    				type="button" 
		    				className="btn btn-outline-danger btn-sm" 
		    				data-ts={timesheet.id} 
		    				onClick={deleteRecordHandler}
		    			>
		    				Delete Record
		    			</button>
				    </div>;

    return (newButton);
};

export default EditModalButton;