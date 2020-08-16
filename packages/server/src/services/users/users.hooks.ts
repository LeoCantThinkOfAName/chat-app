import * as authentication from '@feathersjs/authentication';
import * as local from '@feathersjs/authentication-local';
import createNameFromEmail from '../../hooks/create-name-from-email';
import generateAvatar from '../../hooks/generate-avatar';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;
const { hashPassword, protect } = local.hooks;

export default {
	before: {
		all: [],
		find: [ authenticate('jwt') ],
		get: [ authenticate('jwt') ],
		create: [hashPassword('password'), createNameFromEmail(), generateAvatar()],
		update: [ hashPassword('password'), authenticate('jwt') ],
		patch: [hashPassword('password'), authenticate('jwt'), generateAvatar()],
		remove: [ authenticate('jwt') ],
	},

	after: {
		all: [
			// Make sure the password field is never sent to the client
			// Always must be the last hook
			protect('password'),
		],
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
