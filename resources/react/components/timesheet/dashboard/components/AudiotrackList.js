import React from "react";
import Audiotrack from "./Audiotrack";

const AudiotrackList = ({audiotracks, composition, composer}) => {
	return (
		<div className="composer-items-list">
			{audiotracks.map((audiotrack) =>(			
				<Audiotrack
					key={audiotrack.id}
					audiotrack={audiotrack}
					composition={composition}
					composer={composer}
				/>
			))}
		</div>
	);
};

export default AudiotrackList;
