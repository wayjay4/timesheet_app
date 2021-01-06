import React from "react";
import Composition from "./Composition";

const CompositionList = ({
	compositions,
	composer
}) => {
	return (
		<div className="composer-items-list">
			{compositions.map((composition)=>(
				<Composition 
					key={composition.id}
					composition={composition}
					composer={composer}
				/>
        	))}
		</div>
	);
};

export default CompositionList;
