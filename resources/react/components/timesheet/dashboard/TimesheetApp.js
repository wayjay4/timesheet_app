import React, { useState, useEffect } from 'react';
import RecordModal from "./components/RecordModal";
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
        // make connection
        fetch(apiUrl+"timesheets", {
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

    return (
        <div className="container">
            <h3>Timesheets Listing Container</h3>

            <div className="content">
                <div className="timesheet-container">
                    <table className="table table-bordered table-dark">
                        <thead>
                            <tr>
                                <td scope="col">#</td>
                                <td colSpan="4"></td>
                                <td colSpan="2">
                                    <input type="text" className="form-control form-control-sm" id="foreman" value={foreman} onChange={handleForemanChange} placeholder="foreman's name" />
                                </td>
                                <td colSpan="3">
                                    <input type="date" className="form-control form-control-sm" id="weedending" value={weekending} onChange={handleWeekendingChange} placeholder="date" />
                                </td>
                                <td colSpan="4" rowSpan="2">
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
                                <th scope="col" colSpan="3">Week Ending</th>
                            </tr>
                            <tr>
                                <th scope="col" colSpan="7"></th>
                                <th scope="col">Mon</th>
                                <th scope="col">Tue</th>
                                <th scope="col">Wed</th>
                                <th scope="col">Thu</th>
                                <th scope="col">Fri</th>
                                <th scope="col">Sat</th>
                                <th scope="col">Sun</th>
                            </tr>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Building</th>
                                <th scope="col">Date</th>
                                <th scope="col">Type</th>
                                <th scope="col">Subtype</th>
                                <th scope="col">Task</th>
                                <th scope="col">Subtask</th>
                                <th scope="col">HRS</th>
                                <th scope="col">HRS</th>
                                <th scope="col">HRS</th>
                                <th scope="col">HRS</th>
                                <th scope="col">HRS</th>
                                <th scope="col">HRS</th>
                                <th scope="col">HRS</th>
                            </tr>
                        </thead>

                        
                            {
                                !isTimesheetsValid() 
                                    ? 
                                    <tbody>
                                        <tr>
                                            <th scope="row">#</th>
                                            <td colSpan="14">There are no timesheets to display.</td>
                                        </tr>
                                    </tbody>
                                    :
                                    <tbody>
                                        {timesheets.map((timesheet) => (
                                            <tr key={timesheet.id}>
                                                <th scope="row">{timesheet.id}</th>
                                                <td>{timesheet.building}</td>
                                                <td>{timesheet.date}</td>
                                                <td>{timesheet.type}</td>
                                                <td>{timesheet.subtype}</td>
                                                <td>{timesheet.task}</td>
                                                <td>{timesheet.subtask}</td>
                                                <td>{timesheet.hours}</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                        ))}
                                    </tbody>
                            }


                        <thead>
                            <tr>
                                <th colSpan="7" rowSpan="2">Totals</th>
                                <th>Mon</th>
                                <th>Tue</th>
                                <th>Wed</th>
                                <th>Thu</th>
                                <th>Fri</th>
                                <th>Sat</th>
                                <th>Sun</th>
                            </tr>
                            <tr>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <RecordModal
                    apiUrl={apiUrl}
                    apiKey={apiKey}
                />
            </div>
        </div>
    );
}

export default TimesheetApp;
