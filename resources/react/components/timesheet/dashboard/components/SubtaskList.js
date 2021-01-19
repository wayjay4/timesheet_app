import React from "react";

const SubtaskList = ({
	subTasks, handleSubtasksChange, timesheet
}) => {
    return (
		<div>
			<label htmlFor={"subtask-"+timesheet.id}>SubTask</label>
			<select className="form-control form-control-sm" id={"subtask-"+timesheet.id} name="subtask" onChange={handleSubtasksChange}>
			    <option value="0">&nbsp;</option>
			    {subTasks.map((subTask) => (
		            <option key={subTask.id} value={subTask.id}>{subTask.name}</option>
	            ))}
            </select>
		</div>
	);
};

export default SubtaskList;
