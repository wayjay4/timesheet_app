import React, { useState, useEffect } from 'react';
import RecordModal from "./components/RecordModal";
import TimesheetData from "./components/TimesheetData";
//import CRouter from "./components/shared/CRouter";
import "./styles/composerDashboard.css";
import logo from "./images/logo.png";

function TimesheetApp ({apiKey, apiUrl}) {
    // state vars
    const [timesheets, setTimesheets] = useState({});
    const [foreman, setForeman] = useState('');
    const [weekending, setWeekending] = useState('');

    // use effect
    useEffect(() => {
        getTimesheets();
    }, []);

    const getTimesheets = () => {
        let account = 1;

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

    const clickHandler = (el) => {
        //console.log("clickHandler:");
        //console.log(el.target);
        console.log("hello world, button was clicked!");
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

    const deleteRecordHandler = (el) => {
        let account = 1;
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

    const editRecordHandler = (el) => {
        console.log("editRecordHandler:");
        console.log(el.target);
        console.log(el.target.getAttribute("data-ts"));

        let account = 1;
        let timesheet_id = el.target.getAttribute("data-ts");


    };

    // set global var rowCount
    let rowCount = 1;

    return (
        <div className="container">
            <h3>Timesheets Listing Container</h3>

            <div className="content">
                <div className="timesheet-container">
                    <table className="table table-bordered table-hover table-dark table-sm">
                        <thead>
                            <tr>
                                <td scope="col">#</td>
                                <td colSpan="4"><h3>{isTimesheetsValid() ? timesheets[0].account.name : ""}</h3></td>
                                <td colSpan="2">
                                    <input type="text" className="form-control form-control-sm" id="foreman" value={foreman} onChange={handleForemanChange} placeholder="foreman's name" />
                                </td>
                                <td colSpan="1">
                                    <input type="date" className="form-control form-control-sm" id="weekending" value={weekending} onChange={handleWeekendingChange} placeholder="date" />
                                </td>
                                <td colSpan="1" rowSpan="2">
                                    <div>
                                        <div><img src={logo} className="img-fluid" /></div>
                                        <div>VLL- New Mexico</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col" colSpan="4">Employee Name</th>
                                <th scope="col" colSpan="2">Foreman Name</th>
                                <th scope="col" colSpan="1">Week Ending</th>
                            </tr>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Building</th>
                                <th scope="col">Date</th>
                                <th scope="col">Type</th>
                                <th scope="col">Subtype</th>
                                <th scope="col">Task</th>
                                <th scope="col">Subtask</th>
                                <th scope="col" colSpan="1">HRS</th>
                                <th scope="col" colSpan="1">
                                    <RecordModal
                                        apiUrl={apiUrl}
                                        apiKey={apiKey}
                                        getTimesheets={getTimesheets}
                                        timesheet={{"id":0}}
                                    />
                                </th>
                            </tr>
                        </thead>

                        
                            {
                                !isTimesheetsValid() 
                                    ? 
                                    <tbody>
                                        <tr>
                                            <th scope="row">#</th>
                                            <td colSpan="9">There are no timesheets to display.</td>
                                        </tr>
                                    </tbody>
                                    :
                                    <tbody className="table-striped">
                                        {timesheets.map((timesheet) => {

                                            let theDate = timesheet.date.split("-");

                                            let dayOfWeek = new Date(theDate[1]+"-"+theDate[2]+"-"+theDate[0]).toLocaleString('en-us', {  weekday: 'short' })

                                            return (
                                                <tr key={timesheet.id}>
                                                    <th scope="row">
                                                        <TimesheetData timesheet={timesheet} data={rowCount++} />
                                                    </th>
                                                    <td>
                                                        <TimesheetData timesheet={timesheet} data={timesheet.building} />
                                                    </td>
                                                    <td>
                                                        <TimesheetData timesheet={timesheet} data={timesheet.date+" ("+dayOfWeek+")"} />
                                                    </td>
                                                    <td>
                                                        <TimesheetData timesheet={timesheet} data={timesheet.jobtype.name} />
                                                    </td>
                                                    <td>
                                                        <TimesheetData timesheet={timesheet} data={timesheet.subjob.name} />
                                                    </td>
                                                    <td>
                                                        <TimesheetData timesheet={timesheet} data={timesheet.tasktype.name} />
                                                    </td>
                                                    <td>
                                                        <TimesheetData timesheet={timesheet} data={timesheet.subtask.name} />
                                                    </td>
                                                    <td colSpan="1">
                                                        <TimesheetData timesheet={timesheet} data={timesheet.hours} />
                                                    </td>
                                                    <td colSpan="1">
                                                        <RecordModal
                                                            apiUrl={apiUrl}
                                                            apiKey={apiKey}
                                                            getTimesheets={getTimesheets}
                                                            timesheet={timesheet}
                                                            deleteRecordHandler={deleteRecordHandler}
                                                        />
                                                    </td>
                                                </tr>
                                            )})}
                                    </tbody>
                            }


                        <thead>
                            <tr>
                                <th colSpan="7" rowSpan="2">&nbsp;</th>
                                <th colSpan="2">Totals for Week:</th>
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
