export type UserStatus = 'online' | 'offline' | 'afk';

export interface User {
  id: number;
  name: string;
  status: UserStatus;
  description: string;
  thumbnail: string | null;
  background: string | null;
}
