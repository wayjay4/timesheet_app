import React from "react";

const SubjobList = ({
	subJobs, handleSubjobChange
}) => {
    return (
		<div>
			<label htmlFor="subtype">SubType</label>
			<select className="form-control form-control-sm" id="subtype" name="subtype" onChange={handleSubjobChange}>
			    <option value="0">&nbsp;</option>
			    {subJobs.map((subJob) => (
		            <option key={subJob.id} value={subJob.id}>{subJob.name}</option>
	            ))}
            </select>
		</div>
	);
};

export default SubjobList;
