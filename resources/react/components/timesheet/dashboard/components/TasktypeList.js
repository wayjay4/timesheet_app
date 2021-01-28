import React from "react";

const TasktypeList = ({
	taskTypes, handleTasktypeChange, timesheet
}) => {
    return (
		<div>
			<label htmlFor={"tasktype-"+timesheet.id}>TaskType</label>
			<select className="form-control form-control-sm" id={"tasktype-"+timesheet.id} name="tasktype" onChange={handleTasktypeChange}>
			    <option value="0">&nbsp;</option>
			    {taskTypes.map((taskType) => {
			    	var name = taskType.name.split("-");
			    	console.log(name[2]);
			    	return (
			            <option key={taskType.id} value={taskType.id}>{name[2]}</option>
		            );
				})}
            </select>
		</div>
	);
};

export default TasktypeList;
