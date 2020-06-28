import {User} from '@chat-app/shared'; 

export const fakeContacts: User[] = [
	{
		id: 1,
		name: 'User 1',
		unreads: 120,
		status: 'online',
		description: 'I\'m stupid',
		thumbnail: null,
		background: null,
	},
	{
		id: 2,
		name: 'User 2',
		unreads: 0,
		status: 'offline',
		description: "I'm idiot",
		thumbnail: null,
		background: null,
	},
	{
		id: 3,
		name: 'User 3',
		unreads: 3,
		status: 'afk',
		description: "I'm idiot",
		thumbnail: null,
		background: null,
	},
];