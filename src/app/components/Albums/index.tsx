import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import UserAlbum from "../Albums/Album";

import { useAppDispatch, useAppSelector } from "../../store";
import { userAlbumsById } from "../../store/users/action";

import { Album } from "../../../entities/user";

import "./index.scss"

const Albums = () => {
	const dispatch = useAppDispatch()
	const albums = useAppSelector((state)=>state.usersSlice.albums)

	const { id } = useParams()


	useEffect(() => {
		(async () => {
			id && await dispatch(userAlbumsById(id));
		})();
	}, [id]);

	return (
		<div className="album">
			{albums.map((album: Album)=> {
				return <UserAlbum album={album}/>
			})}
		</div>
	);
};

export default Albums;
