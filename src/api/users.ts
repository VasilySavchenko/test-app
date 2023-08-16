import { APIClient } from '.';
import {Album, Post, User} from "../entities/user";


/** User api client */
export class UsersApi extends APIClient {
	private readonly ROOT_PATH = 'https://jsonplaceholder.typicode.com/';

	/** Get all users */
	public async getUsers(): Promise<User[]> {
		const path = `${this.ROOT_PATH}users`;

		const response = await this.http.get({
				path,
			}
		);

		if (!response.ok) {
			await this.handleError(response);
		}

		return await response.json();
	}

	/** Get user posts */
	public async getUserPosts(id: string): Promise<Post[]> {
		const path = `${this.ROOT_PATH}posts?userId=${id}`;

		const response = await this.http.get({
				path,
			}
		);

		if (!response.ok) {
			await this.handleError(response);
		}

		return await response.json();
	}

	/** Get user posts */
	public async getUserAlbums(id: string): Promise<Album[]> {
		const path = `${this.ROOT_PATH}albums?userId=${id}`;

		const response = await this.http.get({
				path,
			}
		);

		if (!response.ok) {
			await this.handleError(response);
		}

		return await response.json();
	}

}
