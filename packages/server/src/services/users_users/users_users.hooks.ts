import * as authentication from '@feathersjs/authentication';
import getAllFriends from '../../hooks/get-all-friends';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
	before: {
		all: [ authenticate('jwt') ],
		find: [ getAllFriends() ],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: [],
	},

	after: {
		all: [],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: [],
	},

	error: {
		all: [],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: [],
	},
};
