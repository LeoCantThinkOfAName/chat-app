export interface Message {
  id: number;
  chatRoomId: number;
  userId: number;
  message: string;
  timestamp: Date;
  read: number[];
}