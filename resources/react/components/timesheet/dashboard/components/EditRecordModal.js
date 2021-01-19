import React, { useState,useEffect } from "react";
import JobtypeList from "./JobtypeList";
import SubjobList from "./SubjobList";
import TasktypeList from "./TasktypeList";
import SubtaskList from "./SubtaskList";

const EditRecordModal = ({apiUrl, apiKey, getTimesheets}) => {
	// state vars
	const [jobTypes, setJobtypes] = useState([]);
	const [jobType, setJobtype] = useState();
	const [subJobs, setSubjobs] = useState([]);
	const [subJob, setSubjob] = useState();

	const [taskTypes, setTasktypes] = useState([]);
	const [taskType, setTasktype] = useState();

	const [subTasks, setSubtasks] = useState([]);
	const [subTask, setSubtask] = useState();

	const [formValues, setFormValues] = useState({});

	// use effect
	useEffect(() => {
		getJobTypes();
	}, []);

	const isArrayValid = (arr) => {
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
		})
		.catch(err => {
			console.log(err);
		});
	};

    const handleJobtypeChange = (el) => {
		setJobtype(el.target.value);
		getSubjobs(el.target.value);
		handleFormChange(el);
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
		})
		.catch(err => {
			console.log(err);
		});
	};

    const handleSubjobChange = (el) => {
		setSubjob(el.target.value);
		getTasktypes(jobType, el.target.value);
		handleFormChange(el);
	};

	const getTasktypes = (jobType, subJob) => {
		// api connection and send request
		fetch(apiUrl+"jobtypes/"+jobType+"/subjobs/"+subJob+"/tasktypes", {
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
		})
		.catch(err => {
			console.log(err);
		});
	};

    const handleTasktypeChange = (el) => {
		setTasktype(el.target.value);
		getSubtasks(jobType, subJob, el.target.value);
		handleFormChange(el);
	};

	const getSubtasks = (jobType, subJob, taskType) => {
		// api connection and send request
		fetch(apiUrl+"jobtypes/"+jobType+"/subjobs/"+subJob+"/tasktypes/"+taskType+"/subtasks", {
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
		})
		.catch(err => {
			console.log(err);
		});
	};

    const handleSubtasksChange = (el) => {
		setSubtask(el.target.value);
		handleFormChange(el);
	};

	const handleFormChange = (el) => {
		formValues[el.target.name] = el.target.value;
		setFormValues(formValues);
	};

	const handleSubmitForm = (el) => {
		console.log("formValues Submitted: ");
		console.log(formValues);
		let account = 1;

		// make connection
		fetch(apiUrl+"accounts/"+account+"/timesheets", {
			"method": "POST",
            "headers": {
                "Authorization": "Bearer "+apiKey,
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Referer": location.origin,
            },
            "body": JSON.stringify(formValues),
		})
		.then(response => response.json())
		.then(response => {
			console.log("response from timesheet store: ");
			console.log(response);
			getTimesheets();
			$('#addTimeModal').modal('hide');
		})
		.catch(err => {
			console.log(err);
		});
	};

	return (
		<div className="container">
		    { /*Button trigger modal*/ }
		    <button type="button" className="btn btn-outline-warning btn-sm" data-toggle="modal" data-target="#editTimeModal">
		      Add Timesheet
		    </button>

		    { /*Modal*/ }
		    <div className="modal fade" id="editTimeModal" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="addTimeModalLabel" aria-hidden="true">
		      <div className="modal-dialog">
		        <div className="modal-content">
		          <div className="modal-header">
		            <h5 className="modal-title" id="addTimeModalLabel">Add Record</h5>

		            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		              <span aria-hidden="true">&times;</span>
		            </button>
		          </div>
		          <div className="modal-body">
		            

		            <form id="timesheet_form">
		              <div hidden className="form-group col-md-3">
		                <label htmlFor="week_ending">Week Ending</label>
		                <input type="date" className="form-control form-control-sm" id="week_ending" name="week_ending" onChange={handleFormChange} placeholder="date" />
		              </div>

		                <div className="form-row">
		                  <div className="form-group col-md-6">
		                    <label htmlFor="building">Building</label>
		                    <input type="email" className="form-control form-control-sm" id="building" name="building" onChange={handleFormChange} placeholder="bldg #" />
		                  </div>

		                  <div className="form-group col-md-6">
		                    <label htmlFor="building">Date</label>
		                    <input type="date" className="form-control form-control-sm" id="date" name="date" onChange={handleFormChange} placeholder="date" />
		                  </div>
		                </div>

		                <div className="form-row">
		                  <div className="form-group col-md-3">
		                  	{
		                  		!isArrayValid(jobTypes)
		                  			?
		                  			<div>no jobTypes.</div>
		                  			:
		                  			<JobtypeList jobTypes={jobTypes} handleJobtypeChange={handleJobtypeChange} />
		                  	}
		                  </div>

		                  <div className="form-group col-md-3">
		                  	{
		                  		!isArrayValid(subJobs)
		                  			?
		                  			<div>no subJobs.</div>
		                  			:
		                  			<SubjobList subJobs={subJobs} handleSubjobChange={handleSubjobChange} />
		                  	}
		                  </div>

		                  <div className="form-group col-md-3">
		                  	{
		                  		!isArrayValid(taskTypes)
		                  			?
		                  			<div>no taskTypes.</div>
		                  			:
		                  			<TasktypeList taskTypes={taskTypes} handleTasktypeChange={handleTasktypeChange} />
		                  	}
		                  </div>

		                  <div className="form-group col-md-3">
		                  	{
		                  		!isArrayValid(subTasks)
		                  			?
		                  			<div>no subTasks.</div>
		                  			:
		                  			<SubtaskList subTasks={subTasks} handleSubtasksChange={handleSubtasksChange} />
		                  	}
		                  </div>
		                </div>

		              <div className="form-group">
		                <label htmlFor="hours">Hours</label>
		                <input type="text" className="form-control form-control-sm" id="hours" name="hours" onChange={handleFormChange} placeholder="hours worked" />
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

export default EditRecordModal;
