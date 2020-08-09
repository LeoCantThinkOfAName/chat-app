import { UserStatus } from './User';
export interface Friend {
	accepted: boolean;
	createdAt: string;
	fav: boolean;
	friend_id: number;
	hidden: boolean;
	updatedAt: string;
	'user.background': string | null;
	'user.description': string | null;
	'user.name': string;
	'user.status': UserStatus;
	'user.thumbnail': string | null;
	'user.updatedAt': string;
	user_id: number;
}
