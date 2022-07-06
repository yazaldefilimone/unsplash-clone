import { IImageFirebaseStore } from '@/data/protocols/firebase';
import { Image } from '@/domain/entities';
import { fireCollection, fireStore } from '@/main/settings';
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

export class ImageFirebaseStore implements IImageFirebaseStore {
  private storage: string;
  private user: DocumentData | undefined;
  private fireCollection: CollectionReference<DocumentData>;
  constructor() {
    this.storage = 'images';
    this.fireCollection = fireCollection(this.storage);
  }

  async create(data: Image): Promise<{ id: string }> {
    const result = await addDoc(this.fireCollection, data);
    return { id: result.id };
  }

  async getById(id: string): Promise<Image> {
    const results = query(this.fireCollection, where('id', '==', id));
    const users = await getDocs(results);
    users.forEach((doc) => {
      this.user = (doc.id, ' => ', doc.data());
    });

    return this.user as Image;
  }

  async deleteById(id: string): Promise<{ id: string }> {
    return { id: 'not' };
  }
}
