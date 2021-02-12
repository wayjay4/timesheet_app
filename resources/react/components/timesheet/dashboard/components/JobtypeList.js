import React from "react";

const isListValid = (arr) => {
	return (arr.length > 0);
};

const JobtypeList = ({jobTypes, handleJobtypeChange}) => {
    return (
		<div>
			<label htmlFor={"jobtype"}>Type</label>
			{
				!isListValid(jobTypes)
				?
				<select className="form-control form-control-sm" id={"jobtype"} name="jobtype" onChange={handleJobtypeChange}>
				    <option value="0"></option>
	            </select>
				:
				<select className="form-control form-control-sm text-capitalize" id={"jobtype"} name="jobtype" onChange={handleJobtypeChange}>
				    <option value="0">&nbsp;</option>
				    {jobTypes.map((jobType) => (
			            <option className="text-capitalize" key={jobType.id} value={jobType.id}>{jobType.name}</option>
		            ))}
	            </select>
			}
		</div>
	);
};

export default JobtypeList;
