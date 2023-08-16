import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";

import UserPost from "../Posts/Post";

import { useAppDispatch, useAppSelector } from "../../store";
import { userPostsById } from "../../store/users/action";

import { Post } from "../../../entities/user";

import "./index.scss"

const Posts = () => {
	const dispatch = useAppDispatch()
	const posts = useAppSelector((state)=>state.usersSlice.posts)

	const { id } = useParams()

	console.log(posts)

	useEffect(() => {
		(async () => {
			id && await dispatch(userPostsById(id));
		})();
	}, [id]);

	return (
		<div className="posts">
			{posts.map((post: Post)=> {
				return <UserPost post={post}/>
			})}
		</div>
	);
};

export default Posts;
