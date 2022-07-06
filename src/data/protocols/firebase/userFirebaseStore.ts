import { User } from '@/domain/entities';

export interface IUserFirebaseStore {
  create: (data: User) => Promise<any>;
  get: (email: string) => any;
  delete: (id: string) => any;
}
