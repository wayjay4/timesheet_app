import React from "react";

const JobtypeList = ({
	jobTypes, handleJobtypeChange, timesheet
}) => {
    return (
		<div>
			<label htmlFor={"jobtype-"+timesheet.id}>Type</label>
			<select className="form-control form-control-sm" id={"jobtype-"+timesheet.id} name="jobtype" onChange={handleJobtypeChange}>
			    <option value="0">&nbsp;</option>
			    {jobTypes.map((jobType) => (
		            <option key={jobType.id} value={jobType.id}>{jobType.name}</option>
	            ))}
            </select>
		</div>
	);
};

export default JobtypeList;
