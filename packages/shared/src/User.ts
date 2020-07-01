export type UserStatus = 'online' | 'offline' | 'afk';

export interface User {
  id: number;
  name: string;
  unreads?: number;
  status: UserStatus;
  description: string;
  thumbnail: string | null;
  background: string | null;
}
