import React from "react";

const isListValid = (arr) => {
	return (arr.length > 0);
};

const SubjobList = ({subJobs, handleSubjobChange}) => {
    return (
		<div>
			<label htmlFor={"subjob"}>SubType</label>
			{
				!isListValid(subJobs)
				?
				<select className="form-control form-control-sm" id={"subjob"} name="subjob" onChange={handleSubjobChange}>
				    <option value="0"></option>
	            </select>
				:
				<select className="form-control form-control-sm text-capitalize" id={"subjob"} name="subjob" onChange={handleSubjobChange}>
				    <option value="0">&nbsp;</option>
				    {subJobs.map((subJob) => {
				    	var name = subJob.name.split("-");
					    return (
				            <option className="text-capitalize" key={subJob.id} value={subJob.id}>{name[1]}</option>
			            );
					})}
	            </select>
			}
		</div>
	);
};

export default SubjobList;
