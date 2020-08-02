import { Application } from '../declarations';
import users from './users/users.service';
import messages from './messages/messages.service';
import chatrooms from './chatrooms/chatrooms.service';
import usersUsers from './users_users/users_users.service';
import usersChatrooms from './users_chatrooms/users_chatrooms.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function(app: Application) {
	app.configure(users);
	app.configure(messages);
	app.configure(chatrooms);
	app.configure(usersUsers);
	app.configure(usersChatrooms);
}
