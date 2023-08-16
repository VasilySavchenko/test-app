import { createAsyncThunk } from '@reduxjs/toolkit';
import { UsersApi } from "../../../api/users";
import {Album, Post, User} from "../../../entities/user";

const client = new UsersApi();

export const users = createAsyncThunk(
	'users',
	async function( ): Promise<User[]> {
		return await client.getUsers()
	}
);

export const userPostsById = createAsyncThunk(
	'users/posts',
	async function( id: string ): Promise<Post[]> {
		return await client.getUserPosts(id)
	}
);


export const userAlbumsById = createAsyncThunk(
	'users/album',
	async function( id: string ): Promise<Album[]> {
		return await client.getUserAlbums(id)
	}
);
