import React from "react";

const TasktypeList = ({
	taskTypes, handleTasktypeChange
}) => {
    return (
		<div>
			<label htmlFor="task">TaskType</label>
			<select className="form-control form-control-sm" id="task" name="task" onChange={handleTasktypeChange}>
			    <option value="0">&nbsp;</option>
			    {taskTypes.map((taskType) => (
		            <option key={taskType.id} value={taskType.id}>{taskType.name}</option>
	            ))}
            </select>
		</div>
	);
};

export default TasktypeList;
