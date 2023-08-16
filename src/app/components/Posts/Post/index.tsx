import React from "react";
import { Post } from "../../../../entities/user";

import "./index.scss"

const UserPost:React.FC<{ post: Post }> = ({ post }) => {
	return (
		<div className="user-post">
			<h2>{post.title}</h2>
			<p>{post.body}</p>
		</div>
	);
};

export default UserPost;
