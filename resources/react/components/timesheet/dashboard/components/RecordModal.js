import React, { useState,useEffect } from "react";
import JobtypeList from "./JobtypeList";
import SubjobList from "./SubjobList";
import TasktypeList from "./TasktypeList";
import SubtaskList from "./SubtaskList";
import AddModalButton from "./AddModalButton";
import EditModalButton from "./EditModalButton";

const RecordModal = ({apiUrl, apiKey, getTimesheets, timesheet, deleteRecordHandler}) => {
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

	const [modalButton, setModalButton] = useState("nbsp;");
	const [modalHeaderText, setModalHeaderText] = useState("nbsp;");
	const [modalSubmitButton, setModalSubmitButton] = useState("nbsp;");

	const [isEditFormReady, setIsEditFormReady] = useState(false);

	// use effect
	useEffect(() => {
		getJobTypes();

		setFormDataDefaults();
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

			if(timesheet.id > 0 && !isEditFormReady){
				$("#jobtype-"+timesheet.id).val(timesheet.jobtype_id);
				handleJobtypeChange({"target": $("#jobtype-"+timesheet.id)[0]});
			}
		})
		.catch(err => {
			console.log(err);
		});
	};

    const handleJobtypeChange = (el) => {
		setJobtype(el.target.value);
		setSubjob(0);
		setTasktype(0);
		setSubtask(0);

		setSubjobs({});
		setTasktypes({});
		setSubtasks({});


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

			if(timesheet.id > 0 && !isEditFormReady){
				$("#subjob-"+timesheet.id).val(timesheet.subjob_id);
				handleSubjobChange({"target": $("#subjob-"+timesheet.id)[0]});
			}
		})
		.catch(err => {
			console.log(err);
		});
	};

    const handleSubjobChange = (el) => {
    	setSubjob(el.target.value);
		setTasktype(0);
		setSubtask(0);

		setTasktypes({});
		setSubtasks({});

		getTasktypes(el.target.value);
		handleFormChange(el);
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

			if(timesheet.id > 0 && !isEditFormReady){
				$("#tasktype-"+timesheet.id).val(timesheet.tasktype_id);
				handleTasktypeChange({"target": $("#tasktype-"+timesheet.id)[0]});
			}
		})
		.catch(err => {
			console.log(err);
		});
	};

    const handleTasktypeChange = (el) => {
		setTasktype(el.target.value);
		setSubtask(0);

		setSubtasks({});

		getSubtasks(el.target.value);
		handleFormChange(el);
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

			if(timesheet.id > 0 && !isEditFormReady){
				$("#subtask-"+timesheet.id).val(timesheet.subtask_id);
				handleSubtasksChange({"target": $("#subtask-"+timesheet.id)[0]});
			}
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
		let account = 1;

		let week_ending = $("#weekending").val();
		let foreman = $("#foreman").val();

		formValues['week_ending'] = week_ending;
		formValues['supervisor_id'] = foreman;

		setFormValues(formValues);

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
			console.log("response from timesheet STORE: ");
			console.log(response);
			getTimesheets();
			$('#addTimeModal-'+timesheet.id).modal('hide');
		})
		.catch(err => {
			console.log(err);
		});
	};

	const handleSubmitEditForm = (el) => {
		let account = 1;

		let week_ending = $("#weekending").val();
		let foreman = $("#foreman").val();

		formValues['week_ending'] = week_ending;
		formValues['supervisor_id'] = foreman;

		fetch(apiUrl+"accounts/"+account+"/timesheets/"+timesheet.id, {
			"method": "PUT",
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
			console.log("response from timesheet EDIT: ");
			console.log(response);
			getTimesheets();
			$('#addTimeModal-'+timesheet.id).modal('hide');
		})
		.catch(err => {
			console.log(err);
		});
	};

	const setFormDataDefaults = () => {
		let modalOpenButton;
		let modalHeaderText;
		let submitButton;

		if(timesheet.id > 0){
			modalOpenButton = <EditModalButton timesheet={timesheet} deleteRecordHandler={deleteRecordHandler} />;
			modalHeaderText = "Edit Record";
			submitButton = <button type="button" className="btn btn-primary" onClick={handleSubmitEditForm}>Submit</button>;
		}
		else{
			modalOpenButton = <AddModalButton timesheet={timesheet} />;
			modalHeaderText = "Add Record";
			submitButton = <button type="button" className="btn btn-primary" onClick={handleSubmitForm}>Submit</button>;
		}

		setModalButton(modalOpenButton);
		setModalHeaderText(modalHeaderText);
		setModalSubmitButton(submitButton);

		$("#week_ending-"+timesheet.id).val(timesheet.date);
		$("#building-"+timesheet.id).val(timesheet.building);
		$("#date-"+timesheet.id).val(timesheet.date);
		$("#hours-"+timesheet.id).val(timesheet.hours);

		handleFormChange({"target": $("#week_ending-"+timesheet.id)[0]});
		handleFormChange({"target": $("#building-"+timesheet.id)[0]});
		handleFormChange({"target": $("#date-"+timesheet.id)[0]});
		handleFormChange({"target": $("#hours-"+timesheet.id)[0]});

		setIsEditFormReady(true);
	};

	return (
		<div className="container" style={{color:"black"}}>
		    { /*Button trigger modal*/ }
		    {modalButton}

		    { /*Modal*/ }
		    <div className="modal fade" id={"addTimeModal-"+timesheet.id} data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby={"addTimeModalLabel-"+timesheet.id} aria-hidden="true">
		      <div className="modal-dialog modal-dialog-centered modal-xl">
		        <div className="modal-content">
		          <div className="modal-header">
		            <h5 className="modal-title" id={"addTimeModalLabel-"+timesheet.id}>{modalHeaderText}</h5>

		            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		              <span aria-hidden="true">&times;</span>
		            </button>
		          </div>
		          <div className="modal-body">
		            

		            <form id={"timesheet_form-"+timesheet.id}>
		              <div hidden className="form-group col-md-3">
		                <label htmlFor={"week_ending-"+timesheet.id}>Week Ending</label>
		                <input type="date" className="form-control form-control-sm" id={"week_ending-"+timesheet.id} name="week_ending" onChange={handleFormChange} placeholder="date" />
		              </div>

		                <div className="form-row">
		                  <div className="form-group col-md-6">
		                    <label htmlFor={"building-"+timesheet.id}>Building</label>
		                    <input type="text" className="form-control form-control-sm" id={"building-"+timesheet.id} name="building" onChange={handleFormChange} placeholder="bldg #" />
		                  </div>

		                  <div className="form-group col-md-6">
		                    <label htmlFor={"date-"+timesheet.id}>Date</label>
		                    <input type="date" className="form-control form-control-sm" id={"date-"+timesheet.id} name="date" onChange={handleFormChange} placeholder="date" />
		                  </div>
		                </div>

		                <div className="form-row">
		                  <div className="form-group col-md-3">
		                  	{
		                  		!isArrayValid(jobTypes)
		                  			?
		                  			<div>no jobTypes.</div>
		                  			:
		                  			<JobtypeList jobTypes={jobTypes} handleJobtypeChange={handleJobtypeChange} timesheet={timesheet} />
		                  	}
		                  </div>

		                  <div className="form-group col-md-3">
		                  	{
		                  		!isArrayValid(subJobs)
		                  			?
		                  			<div>no subJobs.</div>
		                  			:
		                  			<SubjobList subJobs={subJobs} handleSubjobChange={handleSubjobChange} timesheet={timesheet} />
		                  	}
		                  </div>

		                  <div className="form-group col-md-3">
		                  	{
		                  		!isArrayValid(taskTypes)
		                  			?
		                  			<div>no taskTypes.</div>
		                  			:
		                  			<TasktypeList taskTypes={taskTypes} handleTasktypeChange={handleTasktypeChange} timesheet={timesheet} />
		                  	}
		                  </div>

		                  <div className="form-group col-md-3">
		                  	{
		                  		!isArrayValid(subTasks)
		                  			?
		                  			<div>no subTasks.</div>
		                  			:
		                  			<SubtaskList subTasks={subTasks} handleSubtasksChange={handleSubtasksChange} timesheet={timesheet} />
		                  	}
		                  </div>
		                </div>

		              <div className="form-group">
		                <label htmlFor={"hours-"+timesheet.id}>Hours</label>
		                <input type="text" className="form-control form-control-sm" id={"hours-"+timesheet.id} name="hours" onChange={handleFormChange} placeholder="hours worked" />
		              </div>

		            </form>

		          </div>
		          <div className="modal-footer">
		            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
		            {modalSubmitButton}
		          </div>
		        </div>
		      </div>
		    </div>
		</div>
	);
};

export default RecordModal;
