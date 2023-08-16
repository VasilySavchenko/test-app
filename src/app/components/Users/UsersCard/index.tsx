import React from 'react';
import { NavLink } from "react-router-dom";

import { User } from "../../../../entities/user";
import { AVATAR_COLOR } from "../../../../entities/color";

import "./index.scss"

const UserCard: React.FC<{ user: User }> = ( { user}) => {

	const generateAvatarColor = (name: string) => {
		const charIndex = name.charCodeAt(0) % AVATAR_COLOR.length;
		return AVATAR_COLOR[charIndex];
	};

	const avatarColor = generateAvatarColor(user.name);
	const avatarInitial = user.name.charAt(0).toUpperCase();

	return (
		<div className="user-card">
			<div className="wrapper">
				<div className="avatar" style={{ backgroundColor: avatarColor }}>
					{avatarInitial}
				</div>
			</div>
			<p><strong>Name:</strong> {user.name}</p>
			<p><strong>Email:</strong> {user.email}</p>
			<p><strong>Phone:</strong> {user.phone}</p>
			<p><strong>Web:</strong> {user.website}</p>
			<div className="buttons">
				<NavLink className="btn" to={`posts/${user.id}`}>Posts</NavLink>
				<NavLink className="btn" to={`albums/${user.id}`}>Albums</NavLink>
			</div>
		</div>
	);
};

export default UserCard;
