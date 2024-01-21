import React from 'react';
import JobtypeList from "./JobtypeList";
import SubjobList from "./SubjobList";
import TasktypeList from "./TasktypeList";
import SubtaskList from "./SubtaskList";

const FormModal = ({apiUrl, apiKey, jobTypes, handleJobtypeChange, subJobs, handleSubjobChange, taskTypes, handleTasktypeChange, subTasks, handleSubtasksChange, handleFormChange, handleSubmitForm}) => {
	return (
		<div className="container" style={{"color": "black"}}>
			{ /*Modal*/ }
			<div className="modal fade" id={"addTimeModal"} data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby={"addTimeModalLabel"} aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-xl">
					<div className="modal-content">

						<div className="modal-header">
							<h5 className="modal-title" id={"addTimeModalLabel"}>Modal Header Text Here</h5>

							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						
						<div className="modal-body">
							<form id={"timesheet_form"}>
								<div hidden className="form-group col-md-3">
									<label htmlFor={"week_ending_OLD"}>Week Ending</label>
									<input type="date" className="form-control form-control-sm" id={"week_ending_OLD"} name="week_ending_OLD" onChange={handleFormChange} placeholder="date" />
								</div>

								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor={"building"}>Building</label>
										<input type="text" className="form-control form-control-sm" id={"building"} name="building" onChange={handleFormChange} placeholder="bldg #" />
									</div>

									<div className="form-group col-md-6">
										<label htmlFor={"date"}>Date</label>
										<input type="date" className="form-control form-control-sm" id={"date"} name="date" onChange={handleFormChange} placeholder="date" />
									</div>
								</div>

								<div className="form-row">
									<div className="form-group col-md-3">
										<JobtypeList jobTypes={jobTypes} handleJobtypeChange={handleJobtypeChange} />
									</div>

									<div className="form-group col-md-3">
										<SubjobList subJobs={subJobs} handleSubjobChange={handleSubjobChange} />
									</div>

									<div className="form-group col-md-3">
										<TasktypeList taskTypes={taskTypes} handleTasktypeChange={handleTasktypeChange} />
									</div>

									<div className="form-group col-md-3">
										<SubtaskList subTasks={subTasks} handleSubtasksChange={handleSubtasksChange} />
									</div>
								</div>

								<div className="form-group">
									<label htmlFor={"hours"}>Hours</label>
									<input type="text" className="form-control form-control-sm" id={"hours"} name="hours" onChange={handleFormChange} placeholder="hours worked" />
								</div>

							</form>

						</div>

						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary" onClick={handleSubmitForm}>Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormModal;