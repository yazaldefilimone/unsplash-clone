import { Image } from '@/domain/entities';

export interface IImageFirebaseStore {
  create: (data: Image) => Promise<{ id: string }>;
  getById: (id: string) => Promise<Image>;
  deleteById: (id: string) => Promise<{ id: string }>;
}
