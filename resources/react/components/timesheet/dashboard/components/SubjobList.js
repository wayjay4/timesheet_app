import React from "react";

const SubjobList = ({
	subJobs, handleSubjobChange, timesheet
}) => {
    return (
		<div>
			<label htmlFor={"subjob-"+timesheet.id}>SubType</label>
			<select className="form-control form-control-sm" id={"subjob-"+timesheet.id} name="subjob" onChange={handleSubjobChange}>
			    <option value="0">&nbsp;</option>
			    {subJobs.map((subJob) => (
		            <option key={subJob.id} value={subJob.id}>{subJob.name}</option>
	            ))}
            </select>
		</div>
	);
};

export default SubjobList;
