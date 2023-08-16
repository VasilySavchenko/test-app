import React from "react";
import { Album } from "../../../../entities/user";

import "./index.scss"

const UserAlbum:React.FC<{album: Album}> = ({ album }) => {
	return (
		<div className="user-album">
			<h2>{album.title}</h2>
		</div>
	);
};

export default UserAlbum;
