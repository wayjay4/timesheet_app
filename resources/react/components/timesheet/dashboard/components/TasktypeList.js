import React from "react";

const isListValid = (arr) => {
	return (arr.length > 0);
};

const TasktypeList = ({taskTypes, handleTasktypeChange}) => {
    return (
		<div>
			<label htmlFor={"tasktype"}>TaskType</label>
			{
				!isListValid(taskTypes)
				?
				<select className="form-control form-control-sm" id={"tasktype"} name="tasktype" onChange={handleTasktypeChange}>
				    <option value="0"></option>
	            </select>
				:			
				<select className="form-control form-control-sm text-capitalize" id={"tasktype"} name="tasktype" onChange={handleTasktypeChange}>
				    <option value="0">&nbsp;</option>
				    {taskTypes.map((taskType) => {
				    	var name = taskType.name.split("-");
				    	return (
				            <option className="text-capitalize" key={taskType.id} value={taskType.id}>{name[2]}</option>
			            );
					})}
	            </select>
			}
		</div>
	);
};

export default TasktypeList;
