import React, { useState, useEffect } from 'react';
//import ComposerList from "./components/ComposerList";
//import CRouter from "./components/shared/CRouter";
import "./styles/composerDashboard.css";
import logo from "./images/logo.png";

function TimesheetApp ({apiKey, apiUrl}) {
    // state vars
    const [timesheets, setTimesheets] = useState({});

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
            console.log(response);
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
                                <td colSpan="2"></td>
                                <td colSpan="3"></td>
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
                                            <tr>
                                                <th key={timesheet.id} scope="row">{timesheet.id}</th>
                                                <td>&nbsp;</td>
                                                <td>{timesheet.date}</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
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

                <div className="container">
                    { /*Button trigger modal*/ }
                    <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#addTimeModal">
                      Add Timesheet
                    </button>

                    { /*Modal*/ }
                    <div className="modal fade" id="addTimeModal" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="addTimeModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="addTimeModalLabel">Add Record</h5>

                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            

                            <form>
                              <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Building</label>
                                <input type="email" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="bldg #" />
                              </div>

                              <div className="form-group">
                                <label htmlFor="exampleFormControlInput2">Date</label>
                                <input type="date" className="form-control form-control-sm" id="exampleFormControlInput2" placeholder="date" />
                              </div>

                              <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Type</label>
                                <select className="form-control form-control-sm" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>

                              <div className="form-group">
                                <label htmlFor="exampleFormControlSelect2">Subtype</label>
                                <select className="form-control form-control-sm" id="exampleFormControlSelect2">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>

                              <div className="form-group">
                                <label htmlFor="exampleFormControlSelect3">Task</label>
                                <select className="form-control form-control-sm" id="exampleFormControlSelect3">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>

                              <div className="form-group">
                                <label htmlFor="exampleFormControlSelect4">Subtask</label>
                                <select className="form-control form-control-sm" id="exampleFormControlSelect4">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>

                              <div className="form-group">
                                <label htmlFor="exampleFormControlInput3">Hours</label>
                                <input type="text" className="form-control form-control-sm" id="exampleFormControlInput3" placeholder="hours worked" />
                              </div>



                              <div hidden className="form-group">
                                <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                                <select multiple className="form-control form-control-sm" id="exampleFormControlSelect2">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                              <div hidden className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                                <textarea className="form-control form-control-sm" id="exampleFormControlTextarea1" rows="3"></textarea>
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

                {
                    !isTimesheetsValid() 
                        ? 
                        <p>There are no timesheets to display.</p>
                        : 
                        <div className="composer-items-list">
                            <ul>
                                {timesheets.map((timesheet) => (
                                    <li key={timesheet.id}>{timesheet.job_type}</li>
                                ))}
                            </ul>
                        </div>
                }
            </div>
        </div>
    );
}

export default TimesheetApp;
