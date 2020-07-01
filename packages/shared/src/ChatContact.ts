import { Message } from './Message';
import { UserStatus } from './User';

export interface ChatContact {
  chatRoomId: number;
  userId: number;
  userName: string;
  userStatus: UserStatus;
  userThumbnail: string | null;
  lastMessage: Message;
  unread: number;
}
