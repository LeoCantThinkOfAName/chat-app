import { User } from './User';

export interface Message {
  id: number;
  chatRoomId: number;
  user: Partial<User>;
  message: string;
  timestamp: Date;
  read: number[];
}
