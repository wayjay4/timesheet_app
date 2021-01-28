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
		let account = $("#storage").attr("data-acct");

		let week_ending = $("#weekending").val();
		let foreman = $("#foreman").val();

		formValues['week_ending'] = week_ending;
		formValues['foreman_name'] = foreman;
		formValues['supervisor_id'] = 2;

		setFormValues(formValues);

		if(validateFormFields()){
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

				setFormValues({});
			})
			.catch(err => {
				console.log(err);
			});
		}
	};

	const handleSubmitEditForm = (el) => {
		let account = $("#storage").attr("data-acct");

		let week_ending = $("#weekending").val();
		let foreman = $("#foreman").val();

		formValues['week_ending'] = week_ending;
		formValues['foreman_name'] = foreman;
		formValues['supervisor_id'] = 2;

		setFormValues(formValues);

		if(validateFormFields()){
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
		}
	};

	const validateFormFields = () => {
		if(formValues["foreman_name"].length < 1){
			displayErrorMessage("foreman_name");
			return false;
		}

		if(formValues["supervisor_id"].length < 1){
			displayErrorMessage("supervisor_id");
			return false;
		}

		if(formValues["week_ending"].length < 1){
			displayErrorMessage("week_ending");
			return false;
		}

		if(formValues["building"].length < 1){
			displayErrorMessage("building");
			return false;
		}

		if(formValues["date"].length < 1){
			displayErrorMessage("date");
			return false;
		}

		if(typeof formValues["jobtype"] === 'undefined' || formValues["jobtype"].length < 1 || parseInt(formValues["jobtype"]) < 1){
			displayErrorMessage("jobtype");
			return false;
		}

		if(typeof formValues["subjob"] === 'undefined' || formValues["subjob"].length < 1 || parseInt(formValues["subjob"]) < 1){
			displayErrorMessage("subjob");
			return false;
		}

		if(typeof formValues["tasktype"] === 'undefined' || formValues["tasktype"].length < 1 || parseInt(formValues["tasktype"]) < 1){
			displayErrorMessage("tasktype");
			return false;
		}

		if(typeof formValues["subtask"] === 'undefined' || formValues["subtask"].length < 1 || parseInt(formValues["subtask"]) < 1){
			displayErrorMessage("subtask");
			return false;
		}

		if(formValues["hours"].length < 1){
			displayErrorMessage("hours");
			return false;
		}

		return true;
	};

	const displayErrorMessage = (msg) => {
		let theMessage = "Please provide a valid '"+msg+"' value."

		return alert(theMessage);
	};

	const validateTimesheetHeaderData = (el) => {
		let modal_id = $(el.target).attr("data-target");
		let foreman = $("#foreman").val();
		let week_ending = $("#weekending").val();

		console.log("el: ");
		console.log(el);
		console.log("el.target: ");
		console.log(el.target);
		console.log("modal_id: ");
		console.log(modal_id);
		console.log("yo yo mtv raps!");

		// $(modal_id).on('show.bs.modal', function (e) {
		// 	// $(e).modal('hide');
		// 	console.log("e: ");
		// 	console.log(e);
		// });

		// $(modal_id).on('show.bs.modal', function (e) {
		// 	$(modal_id).modal('show');
		// });	

		// return el.preventDefault();

		if(typeof foreman === 'undefined' || foreman.length < 1){
			console.log("Errror: please provide a 'foreman_name'");
			displayErrorMessage("foreman_name");
			setTimeout(function(){ $(modal_id).modal('hide') }, 315);

			// $(modal_id).on('show.bs.modal', function (e) {
			// 	$(modal_id).modal('hide');
			// });

			// $(modal_id).modal('hide');
			
			return false;
		}

		// if(formValues["supervisor_id"].length < 1){
		// 	displayErrorMessage("supervisor_id");
		// 	return false;
		// }

		if(typeof week_ending === 'undefined' || week_ending.length < 1){
			console.log("Errror: please provide a 'week_ending'");
			displayErrorMessage("week_ending");
			setTimeout(function(){ $(modal_id).modal('hide') }, 315);

			// $(modal_id).on('show.bs.modal', function (e) {
			// 	$(modal_id).modal('hide');
			// });

			// $(modal_id).modal('hide');
			
			return false;
		}

		// $(modal_id).on('show.bs.modal', function (e) {
		// 	$(modal_id).modal('show');
		// });

		// $(modal_id).modal('show');

		return true;
	};

	const setFormDataDefaults = () => {
		let modalOpenButton;
		let modalHeaderText;
		let submitButton;

		if(timesheet.id > 0){
			modalOpenButton = <EditModalButton timesheet={timesheet} deleteRecordHandler={deleteRecordHandler} validateTimesheetHeaderData={validateTimesheetHeaderData} />;
			modalHeaderText = "Edit Record";
			submitButton = <button type="button" className="btn btn-primary" onClick={handleSubmitEditForm}>Submit</button>;
		}
		else{
			modalOpenButton = <AddModalButton timesheet={timesheet} validateTimesheetHeaderData={validateTimesheetHeaderData} />;
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
		                  			""
		                  			:
		                  			<JobtypeList jobTypes={jobTypes} handleJobtypeChange={handleJobtypeChange} timesheet={timesheet} />
		                  	}
		                  </div>

		                  <div className="form-group col-md-3">
		                  	{
		                  		!isArrayValid(subJobs)
		                  			?
		                  			""
		                  			:
		                  			<SubjobList subJobs={subJobs} handleSubjobChange={handleSubjobChange} timesheet={timesheet} />
		                  	}
		                  </div>

		                  <div className="form-group col-md-3">
		                  	{
		                  		!isArrayValid(taskTypes)
		                  			?
		                  			""
		                  			:
		                  			<TasktypeList taskTypes={taskTypes} handleTasktypeChange={handleTasktypeChange} timesheet={timesheet} />
		                  	}
		                  </div>

		                  <div className="form-group col-md-3">
		                  	{
		                  		!isArrayValid(subTasks)
		                  			?
		                  			""
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
