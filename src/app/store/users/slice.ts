import { createSlice } from '@reduxjs/toolkit';
import { immerable } from 'immer';
import {Album, Post, User} from "../../../entities/user";
import {userAlbumsById, userPostsById, users} from "./action";

// eslint-disable-next-line require-jsdoc
class PlaidState {
	[immerable] = true;
	public users: User[] = [];
	public posts: Post[] = [];
	public albums: Album[] = [];
}

export const plaidSlice = createSlice({
	name: 'users',
	initialState: new PlaidState(),
	reducers: {
	},
	extraReducers: (builder) => {
		builder.addCase(users.fulfilled, (state, action) => {
			state.users = action.payload
		});
		builder.addCase(userPostsById.fulfilled, (state, action) => {
			state.posts = action.payload
		});
		builder.addCase(userAlbumsById.fulfilled, (state, action) => {
		state.albums = action.payload
		});
	},

});

export default plaidSlice.reducer;
