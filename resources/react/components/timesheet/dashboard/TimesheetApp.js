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
    const [foreman, setForeman] = useState('');
    const [weekending, setWeekending] = useState('');
    const [userPhoto, setUserPhoto] = useState('');

    const [timesheetData, setTimesheetData] = useState({
        'timesheet_id': -1,
        'foreman_name': '',
        'supervisor_id': '',
        'week_ending': '',
        'building': '',
        'date': '',
        'jobtype': '',
        'subjob': '',
        'tasktype': '',
        'subtask': '',
        'hours': '',
    });

    // use effect
    useEffect(() => {
        getTimesheets();
        setUserPhoto($("#storage").attr("data-profilePhoto"));
    }, []);

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

    const handleForemanChange = (el) => {
        console.log(el.target.value);
        setForeman(el.target.value);
    };

    const handleWeekendingChange = (el) => {
        console.log(el.target.value);
        setWeekending(el.target.value);
    };

    const isTimesheetsValid = () => {
        return (timesheets.length > 0);
    };

    const handleModalButtonClick = (e) => {
        let timesheet_id = $(e.target).data('targettimesheet');

        if(timesheet_id >= 0){
            let mytime = timesheets[timesheet_id];

            timesheetData.timesheet_id = mytime.id;
            timesheetData.foreman_name = mytime.foreman_name;
            timesheetData.supervisor_id = mytime.supervisor_id;
            timesheetData.week_ending = mytime.week_ending;
            timesheetData.building = mytime.building;
            timesheetData.date = mytime.date;
            timesheetData.jobtype = mytime.jobtype;
            timesheetData.subjob = mytime.subjob;
            timesheetData.tasktype = mytime.tasktype;
            timesheetData.subtask = mytime.subtask;
            timesheetData.hours = mytime.hours;
            setTimesheetData(timesheetData);

        }
        else{
            timesheetData.timesheet_id = -1;
            timesheetData.foreman_name = '';
            timesheetData.supervisor_id = '';
            timesheetData.week_ending = '';
            timesheetData.building = '';
            timesheetData.date = '';
            timesheetData.jobtype = '';
            timesheetData.subjob = '';
            timesheetData.tasktype = '';
            timesheetData.subtask = '';
            timesheetData.hours = '';
            setTimesheetData(timesheetData);
        }

        $("#week_ending").val(timesheetData.week_ending);
        $("#building").val(timesheetData.building);
        $("#date").val(timesheetData.date);
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
    };

    const getTimesheetData = () => {
        return timesheetData;
    };

    // set global var rowCount
    let rowCount = 1;
    let rowTotals = 0;

    return (
        <div className="container">
            <h3>Timesheets Container</h3>

            <FormModal
                apiUrl={apiUrl}
                apiKey={apiKey}
            />

            <div className="content">
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
                                        <input type="text" className="form-control form-control-sm" id="foreman" value={foreman} onChange={handleForemanChange} placeholder="foreman's name" />
                                    </div>
                                </td>
                                <td colSpan="1">
                                    <div className="container" style={{"display":"flex", "justifyContent":"center"}}>
                                    <input type="date" className="form-control form-control-sm" id="weekending" value={weekending} onChange={handleWeekendingChange} placeholder="date" />
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
