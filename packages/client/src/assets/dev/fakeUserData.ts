import {User} from '@chat-app/shared'; 

export const fakeContacts: User[] = [
	{
		id: 1,
		name: 'Candy',
		unreads: 120,
		status: 'online',
		description: 'I luv you',
		thumbnail: null,
		background: null,
	},
	{
		id: 2,
		name: 'Leo',
		unreads: 0,
		status: 'offline',
		description: "I'm idiot",
		thumbnail: null,
		background: null,
	},
	{
		id: 3,
		name: 'Meow',
		unreads: 3,
		status: 'afk',
		description: "I'm idiot",
		thumbnail: null,
		background: null,
	},
];