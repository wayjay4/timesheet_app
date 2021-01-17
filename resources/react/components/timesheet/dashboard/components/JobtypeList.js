import React from "react";

const JobtypeList = ({
	jobTypes, handleJobtypeChange
}) => {
    return (
		<div>
			<label htmlFor="type">Type</label>
			<select className="form-control form-control-sm" id="type" name="type" onChange={handleJobtypeChange}>
			    <option value="0">&nbsp;</option>
			    {jobTypes.map((jobType) => (
		            <option key={jobType.id} value={jobType.id}>{jobType.name}</option>
	            ))}
            </select>
		</div>
	);
};

export default JobtypeList;
