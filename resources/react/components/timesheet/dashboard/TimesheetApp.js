import React, { useState, useEffect } from 'react';
import FormModal from './components/FormModal';
import AddModalButton from "./components/AddModalButton";
import EditModalButton from "./components/EditModalButton";
import TimesheetDataHeader from "./components/TimesheetDataHeader";
import TimesheetData from "./components/TimesheetData";
import "./styles/composerDashboard.css";
import logo from "./images/logo.png";

function TimesheetApp ({apiKey, apiUrl}) {
    // state vars
    const [timesheets, setTimesheets] = useState({});
    const [userPhoto, setUserPhoto] = useState('');

    const [timesheetData, setTimesheetData] = useState({
        'timesheet_id': -1,
        'foreman_name': '',
        'supervisor_id': '',
        'week_ending': '',
        'building': '',
        'date': '',
        'jobtype': 0,
        'subjob': 0,
        'tasktype': 0,
        'subtask': 0,
        'hours': '',
    });

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
        getTimesheets();
        setUserPhoto($("#storage").attr("data-profilePhoto"));
        getJobTypes();
    }, []);

    const testApiAuth = () => {
        let testApiUrl = "https://auth_api_app.webtalkerdesigns.com/api/login";
        let testFormValues = {
            'email': 'wayjay4@yahoo.com',
            'password': 'supersecret',
        };

        // make connection
        fetch(testApiUrl, {
            "method": "POST",
            "headers": {
                //"Authorization": "Bearer "+apiKey,
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Referer": location.origin,
            },
            "body": JSON.stringify(testFormValues),
        })
        .then(response => response.json())
        .then(response => {
            console.log("This is response from testApiAuth:");
            console.log(response);
            testApiGetUser(response.token);
        })
        .catch(err => {
            console.log(err);
        });
    };

    const testApiGetUser = (token) => {
        let testApiUrl = "https://auth_api_app.webtalkerdesigns.com/api/user";
        let testFormValues = {
            'email': 'wayjay4@yahoo.com',
            'password': 'supersecret',
        };
        let apiKey = token;

        // make connection
        fetch(testApiUrl, {
            "method": "GET",
            "headers": {
                "Authorization": "Bearer "+apiKey,
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Referer": location.origin,
            },
            //"body": JSON.stringify(testFormValues),
        })
        .then(response => response.json())
        .then(response => {
            console.log("This is response from testApiAuth:");
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
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

            if(timesheetData.jobtype > 0){
                $("#jobtype").val(timesheetData.jobtype);
                handleJobtypeChange({"target": $("#jobtype")[0]});
            }
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

            if(timesheetData.subjob >= 0){
                $("#subjob").val(timesheetData.subjob);
                handleSubjobChange({"target": $("#subjob")[0]});
            }
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

            if(timesheetData.tasktype >= 0){
                $("#tasktype").val(timesheetData.tasktype);
                handleTasktypeChange({"target": $("#tasktype")[0]});
            }
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

            if(timesheetData.subtask >= 0){
                $("#subtask").val(timesheetData.subtask);
                handleSubtasksChange({"target": $("#subtask")[0]});
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

    const handleFormChange = (event) => {
        formValues[event.target.name] = event.target.value;
        setFormValues(formValues);
        console.log("formValues: ");
        console.log(formValues);
    };



    const getTimesheets = () => {
        let account = $("#storage").attr("data-acct");

        // make connection
        fetch(apiUrl+"accounts/"+account+"/timesheets", {
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

            if(response.length > 0)
                response.sort((a, b)=>{
                    let result = 0;

                    if(a.date > b.date){
                        result = 1;
                    } 
                    else if(a.date < b.date){
                        result = -1;
                    }

                    return result;
                });

            setTimesheets(response);
        })
        .catch(err => {
            console.log(err);
        });
    };

    const deleteRecordHandler = (el) => {
        let account = $("#storage").attr("data-acct");
        let timesheet_id = el.target.getAttribute("data-ts");

        let confirmResult = confirm("Are you sure you want to delete the timesheet record?");

       if(confirmResult){
            // make connection
            fetch(apiUrl+"accounts/"+account+"/timesheets/"+timesheet_id, {
                "method": "DELETE",
                "headers": {
                    "Authorization": "Bearer "+apiKey,
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Referer": location.origin,
                }
            })
            .then(response => response.json())
            .then(response => {
                getTimesheets();
            })
            .catch(err => {
                console.log(err);
            });
       }
    };

    const isTimesheetsValid = () => {
        return (timesheets.length > 0);
    };

    const handleModalButtonClick = (e) => {
        if(validateTimesheetHeaderData(e)){
            let timesheet_id = $(e.target).data('targettimesheet');

            if(timesheet_id >= 0){
                let mytime = timesheets[timesheet_id];

                timesheetData.timesheet_id = mytime.id;
                timesheetData.foreman_name = mytime.foreman_name;
                timesheetData.supervisor_id = mytime.supervisor_id;
                timesheetData.week_ending = mytime.week_ending;
                timesheetData.building = mytime.building;
                timesheetData.date = mytime.date;
                timesheetData.jobtype = mytime.jobtype.id;
                timesheetData.subjob = mytime.subjob.id;
                timesheetData.tasktype = mytime.tasktype.id;
                timesheetData.subtask = mytime.subtask.id;
                timesheetData.hours = mytime.hours;
                setTimesheetData(timesheetData);

                getJobTypes();
            }
            else{
                timesheetData.timesheet_id = -1;
                timesheetData.foreman_name = '';
                timesheetData.supervisor_id = '';
                timesheetData.week_ending = '';
                timesheetData.building = '';
                timesheetData.date = '';
                timesheetData.jobtype = 0;
                timesheetData.subjob = 0;
                timesheetData.tasktype = 0;
                timesheetData.subtask = 0;
                timesheetData.hours = '';
                setTimesheetData(timesheetData);

                getJobTypes();
            }

            $("#week_ending_OLD").val(timesheetData.week_ending);
            $("#building").val(timesheetData.building);
            $("#date").val(timesheetData.date);
            $("#jobtype").val(timesheetData.jobtype);
            $("#subjob").val(timesheetData.subjob);
            $("#tasktype").val(timesheetData.tasktype);
            $("#subtask").val(timesheetData.subtask);
            $("#hours").val(timesheetData.hours);

            // 'timesheet_id': 0,
            // 'foreman_name': '',
            // 'supervisor_id': '',
            // 'week_ending': '',
            // 'building': '',
            // 'date': '',
            // 'jobtype': '',
            // 'subjob': '',
            // 'tasktype': '',
            // 'subtask': '',
            // 'hours': '',
        }
    };

    const validateTimesheetHeaderData = (el) => {
        let foreman_name = $("#foreman_name").val();
        let week_ending = $("#week_ending").val();

        if(typeof foreman_name === 'undefined' || foreman_name.length < 1){
            displayErrorMessage("foreman_name");
            return false;
        }

        if(typeof week_ending === 'undefined' || week_ending.length < 1){
            displayErrorMessage("week_ending");
            return false;
        }

        $("#addTimeModal").modal('show');

        return true;
    };

    const displayErrorMessage = (msg) => {
        let theMessage = "Please provide a valid '"+msg+"' value."
        alert(theMessage);
    };

    const handleSubmitForm = (el) => {
        let account = $("#storage").attr("data-acct");

        formValues['week_ending'] = $("#week_ending").val();
        formValues['foreman_name'] = $("#foreman_name").val();
        formValues['supervisor_id'] = 2;
        formValues['building'] = $("#building").val();
        formValues['date'] = $("#date").val();
        formValues['jobtype'] = $("#jobtype").val();
        formValues['subjob'] = $("#subjob").val();
        formValues['tasktype'] = $("#tasktype").val();
        formValues['subtask'] = $("#subtask").val();
        formValues['hours'] = $("#hours").val();

        setFormValues(formValues);

        if(validateFormFields()){
            let thisUrl = "";
            let thisMethod = "";

            // if no timesheet_id, then add a timesheet record
            // else, edit an existing timesheet record
            if(timesheetData.timesheet_id <=0){
                thisUrl = apiUrl+"accounts/"+account+"/timesheets";
                thisMethod = "POST";
            }
            else{
                thisUrl = apiUrl+"accounts/"+account+"/timesheets/"+timesheetData.timesheet_id;
                thisMethod = "PUT";
            }

            // make connection
            fetch(thisUrl, {
                "method": thisMethod,
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
                getTimesheets();
                $('#addTimeModal').modal('hide');

                setFormValues({});
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




    const getTimesheetData = () => {
        return timesheetData;
    };

    // set global var rowCount
    let rowCount = 1;
    let rowTotals = 0;

    return (
        <div className="container">
            <h3 hidden>Timesheets Container</h3>

            <FormModal
                apiUrl={apiUrl}
                apiKey={apiKey}
                jobTypes={jobTypes}
                handleJobtypeChange={handleJobtypeChange}
                subJobs={subJobs}
                handleSubjobChange={handleSubjobChange}
                taskTypes={taskTypes}
                handleTasktypeChange={handleTasktypeChange}
                subTasks={subTasks}
                handleSubtasksChange={handleSubtasksChange}
                handleFormChange={handleFormChange}
                handleSubmitForm={handleSubmitForm}
            />

            <div className="content">
                <button type="button" className="btn btn-primary" onClick={testApiAuth}>Test the API Auth</button>
                <button type="button" className="btn btn-primary" onClick={testApiGetUser}>Test the API GET User</button> 
                <div className="timesheet-container">
                    <table className="table table-bordered table-hover table-dark table-sm">
                        <thead>
                            <tr>
                                <td colSpan="5">
                                    <div className="container" style={{"display":"flex", "justifyContent":"flex-start"}}>

                                        <img className="img-thumbnail" src={userPhoto} alt={''} style={{"borderRadius": "50px"}} />

                                        <div style={{"display":"flex", "alignItems":"center", "marginLeft":"10px"}}>
                                            {isTimesheetsValid() ? timesheets[0].account.name : ""}
                                        </div>
                                        
                                    </div>
                                </td>
                                <td colSpan="2">
                                    <div className="container" style={{"display":"flex", "justifyContent":"center"}}>
                                        <input type="text" className="form-control form-control-sm" id="foreman_name" name="foreman_name" onChange={handleFormChange} placeholder="foreman's name" />
                                    </div>
                                </td>
                                <td colSpan="1">
                                    <div className="container" style={{"display":"flex", "justifyContent":"center"}}>
                                    <input type="date" className="form-control form-control-sm" id="week_ending" name="week_ending" onChange={handleFormChange} placeholder="date" />
                                    </div>
                                </td>
                                <td colSpan="1" rowSpan="2">
                                    <div className="container" style={{"display":"flex", "flexDirection":"column", "justifyContent":"center"}}>
                                        <div><img src={logo} className="img-fluid" /></div>
                                        <div>VLL- New Mexico</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="col" colSpan="5"><TimesheetDataHeader data={"Employee Name"} /></th>
                                <th scope="col" colSpan="2"><TimesheetDataHeader data={"Foreman Name"} /></th>
                                <th scope="col" colSpan="1"><TimesheetDataHeader data={"Week Ending"} /></th>
                            </tr>
                            <tr>
                                <th scope="col"><TimesheetDataHeader data={"#"} /></th>
                                <th scope="col"><TimesheetDataHeader data={"Building"} /></th>
                                <th scope="col"><TimesheetDataHeader data={"Date"} /></th>
                                <th scope="col"><TimesheetDataHeader data={"Type"} /></th>
                                <th scope="col"><TimesheetDataHeader data={"Subtype"} /></th>
                                <th scope="col"><TimesheetDataHeader data={"Task"} /></th>
                                <th scope="col"><TimesheetDataHeader data={"Subtask"} /></th>
                                <th scope="col" colSpan="1"><TimesheetDataHeader data={"Hours Worked"} /></th>
                                <th scope="col" colSpan="1">
                                    
                                    <AddModalButton 
                                        targettimesheet={-1} 
                                        handleModalButtonClick={handleModalButtonClick}
                                    />
                                </th>
                            </tr>
                        </thead>

                        
                        {!isTimesheetsValid() 
                            ? 
                            <tbody>
                                <tr>
                                    <td colSpan="9"><TimesheetData data={"There are no timesheet records to display."} /></td>
                                </tr>
                            </tbody>
                            :
                            <tbody className="table-striped">
                                {timesheets.map((timesheet) => {

                                    let theDate = timesheet.date.split("-");
                                    let dateStr = theDate[1]+"/"+theDate[2]+"/"+theDate[0];
                                    let dayOfWeek = new Date(dateStr).toLocaleString('en-us', {  weekday: 'short' })

                                    rowTotals += parseFloat(timesheet.hours);

                                    let subjobName = timesheet.subjob.name.split("-");
                                    let tasktypeName = timesheet.tasktype.name.split("-");

                                    return (
                                        <tr key={timesheet.id}>
                                            <th scope="row">
                                                <TimesheetData data={rowCount} />
                                            </th>
                                            <td>
                                                <TimesheetData data={timesheet.building} />
                                            </td>
                                            <td>
                                                <TimesheetData data={dateStr+" ("+dayOfWeek+")"} />
                                            </td>
                                            <td>
                                                <TimesheetData data={timesheet.jobtype.name} />
                                            </td>
                                            <td>
                                                <TimesheetData data={subjobName[1]} />
                                            </td>
                                            <td>
                                                <TimesheetData data={tasktypeName[2]} />
                                            </td>
                                            <td>
                                                <TimesheetData data={timesheet.subtask.name} />
                                            </td>
                                            <td colSpan="1">
                                                <TimesheetData data={timesheet.hours} />
                                            </td>
                                            <td colSpan="1">
                                                <EditModalButton 
                                                    timesheet={timesheet} 
                                                    deleteRecordHandler={deleteRecordHandler} 
                                                    targettimesheet={(rowCount++)-1}
                                                    handleModalButtonClick={handleModalButtonClick}
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        }


                        <thead>
                            <tr>
                                <th colSpan="7" rowSpan="2">&nbsp;</th>
                                <th colSpan="2">Totals hours for Week: {rowTotals}</th>
                            </tr>
                            <tr>
                                <th colSpan="2">&nbsp;</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TimesheetApp;
