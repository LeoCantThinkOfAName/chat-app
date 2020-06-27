export interface User {
  id: number;
  name: string;
  unreads?: number;
  status: 'online' | 'offline' | 'afk';
  description: string;
  thumbnail: string | null;
  background: string | null;
}
