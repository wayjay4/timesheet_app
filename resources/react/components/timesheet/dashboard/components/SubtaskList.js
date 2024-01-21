import React from "react";

const isListValid = (arr) => {
	return (arr.length > 0);
};

const SubtaskList = ({subTasks, handleSubtasksChange}) => {
    return (
		<div>
			<label htmlFor={"subtask"}>SubTask</label>
			{
				!isListValid(subTasks)
				?
				<select className="form-control form-control-sm" id={"subtask"} name="subtask" onChange={handleSubtasksChange}>
				    <option value="0"></option>
	            </select>
				:			
				<select className="form-control form-control-sm text-capitalize" id={"subtask"} name="subtask" onChange={handleSubtasksChange}>
				    <option value="0">&nbsp;</option>
				    {subTasks.map((subTask) => (
			            <option className="text-capitalize" key={subTask.id} value={subTask.id}>{subTask.name}</option>
		            ))}
	            </select>
			}
		</div>
	);
};

export default SubtaskList;
