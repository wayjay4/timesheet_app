import React from "react";
import Composer from "./Composer";

const ComposerList = ({
	composers
}) => {
	return (
		<div className="composer-items-list">
		    {composers.map((composer) => (
	            <Composer
	                key={composer.id}
	                composer={composer}
	            />
            ))}
		</div>
	);
};

export default ComposerList;
