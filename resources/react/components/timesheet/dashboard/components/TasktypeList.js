import React from "react";

const TasktypeList = ({
	taskTypes, handleTasktypeChange, timesheet
}) => {
    return (
		<div>
			<label htmlFor={"task-"+timesheet.id}>TaskType</label>
			<select className="form-control form-control-sm" id={"task-"+timesheet.id} name="task" onChange={handleTasktypeChange}>
			    <option value="0">&nbsp;</option>
			    {taskTypes.map((taskType) => (
		            <option key={taskType.id} value={taskType.id}>{taskType.name}</option>
	            ))}
            </select>
		</div>
	);
};

export default TasktypeList;
