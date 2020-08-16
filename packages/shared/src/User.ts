export type UserStatus = 'online' | 'offline' | 'afk';

export interface User {
	id: number;
	email: string;
	name: string;
	status: UserStatus;
	description: string;
	thumbnail: string | null;
	background: string | null;
	githubId: string | null;
	facebookId: string | null;
	password: string;
	createdAt: string;
	updatedAt: string;
}
