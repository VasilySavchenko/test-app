export class User {
	constructor(
		public id: number,
		public name: string,
		public username: string,
		public email: string,
		public address: Address,
		public phone: string,
		public website: string,
		public company: Company
	) {}
}

class Geo {
	constructor(public lat: string, public lng: string) {}
}

class Address {
	constructor(
		public street: string,
		public suite: string,
		public city: string,
		public zipcode: string,
		public geo: Geo
	) {}
}

class Company {
	constructor(
		public name: string,
		public catchPhrase: string,
		public bs: string
	) {}
}

export class Post {
	constructor(
		public userId: number,
		public id: number,
		public title: string,
		public body: string
	) {}
}

export class Album {
	constructor(
		public userId: number,
		public id: number,
		public title: string
	) {}
}

