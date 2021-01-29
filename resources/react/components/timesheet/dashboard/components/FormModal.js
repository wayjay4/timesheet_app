import React, {useState, useEffect} from 'react';
import JobtypeList from "./JobtypeList";
import SubjobList from "./SubjobList";
import TasktypeList from "./TasktypeList";
import SubtaskList from "./SubtaskList";

const FormModal = ({apiUrl, apiKey}) => {
	// state vars
	const [jobTypes, setJobtypes] = useState([]);
	const [jobType, setJobtype] = useState();

	const [subJobs, setSubjobs] = useState([]);
	const [subJob, setSubjob] = useState();

	const [taskTypes, setTasktypes] = useState([]);
	const [taskType, setTasktype] = useState();

	const [subTasks, setSubtasks] = useState([]);
	const [subTask, setSubtask] = useState();

	// use effect
	useEffect(() => {
		// do something
		getJobTypes();
	},[]);

	const isListValid = (arr) => {
		return (arr.length > 0);
	};

	const getJobTypes = () => {
		// api connection and send request
		fetch(apiUrl+"jobtypes", {
			"method": "GET",
			"headers": {
				"Authorization": "Bearer "+apiKey,
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Referer": location.origin,
			}
		})
		.then(response => response.json())
		.then(response => {
			setJobtypes(response);

			// if(timesheet.id > 0 && !isEditFormReady){
			// 	$("#jobtype-"+timesheet.id).val(timesheet.jobtype_id);
			// 	handleJobtypeChange({"target": $("#jobtype-"+timesheet.id)[0]});
			// }
		})
		.catch(err => {
			console.log(err);
		});
	};

	const handleJobtypeChange = (el) => {
		setJobtype(el.target.value);

		// reset data and lists in chain
		setSubjob(0);
		setTasktype(0);
		setSubtask(0);

		setSubjobs({});
		setTasktypes({});
		setSubtasks({});

		// get next list in chain
		getSubjobs(el.target.value);

		// handleFormChange(el);
	};

	const getSubjobs = (jobType) => {
		// api connection and send request
		fetch(apiUrl+"jobtypes/"+jobType+"/subjobs", {
			"method": "GET",
			"headers": {
				"Authorization": "Bearer "+apiKey,
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Referer": location.origin,
			}
		})
		.then(response => response.json())
		.then(response => {
			setSubjobs(response);

			// if(timesheet.id > 0 && !isEditFormReady){
			// 	$("#subjob-"+timesheet.id).val(timesheet.subjob_id);
			// 	handleSubjobChange({"target": $("#subjob-"+timesheet.id)[0]});
			// }
		})
		.catch(err => {
			console.log(err);
		});
	};

    const handleSubjobChange = (el) => {
    	setSubjob(el.target.value);

    	// reset data and lists in chain
		setTasktype(0);
		setSubtask(0);

		setTasktypes({});
		setSubtasks({});

		// get next list in chain
		getTasktypes(el.target.value);

		// handleFormChange(el);
	};

	const getTasktypes = (subJob) => {
		// api connection and send request
		fetch(apiUrl+"subjobs/"+subJob+"/tasktypes", {
			"method": "GET",
			"headers": {
				"Authorization": "Bearer "+apiKey,
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Referer": location.origin,
			}
		})
		.then(response => response.json())
		.then(response => {
			setTasktypes(response);

			// if(timesheet.id > 0 && !isEditFormReady){
			// 	$("#tasktype-"+timesheet.id).val(timesheet.tasktype_id);
			// 	handleTasktypeChange({"target": $("#tasktype-"+timesheet.id)[0]});
			// }
		})
		.catch(err => {
			console.log(err);
		});
	};

    const handleTasktypeChange = (el) => {
		setTasktype(el.target.value);

		// reset data and lists in chain
		setSubtask(0);

		setSubtasks({});

		// get next list in chain
		getSubtasks(el.target.value);

		// handleFormChange(el);
	};

	const getSubtasks = (taskType) => {
		// api connection and send request
		fetch(apiUrl+"tasktypes/"+taskType+"/subtasks", {
			"method": "GET",
			"headers": {
				"Authorization": "Bearer "+apiKey,
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Referer": location.origin,
			}
		})
		.then(response => response.json())
		.then(response => {
			setSubtasks(response);

			// if(timesheet.id > 0 && !isEditFormReady){
			// 	$("#subtask-"+timesheet.id).val(timesheet.subtask_id);
			// 	handleSubtasksChange({"target": $("#subtask-"+timesheet.id)[0]});
			// }
		})
		.catch(err => {
			console.log(err);
		});
	};

    const handleSubtasksChange = (el) => {
		setSubtask(el.target.value);

		// handleFormChange(el);
	};

	const handleFormChange = () => {
		// do something
		console.log("handleFormChange was clicked");
	};

	return (
		<div className="container">
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
									<label htmlFor={"week_ending"}>Week Ending</label>
									<input type="date" className="form-control form-control-sm" id={"week_ending"} name="week_ending" onChange={handleFormChange} placeholder="date" />
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
							<button type="button" className="btn btn-primary">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormModal;