import { IUserFirebaseStore } from '@/data/protocols/firebase';
import { User } from '@/domain/entities';
import { fireCollection, fireStore } from '@/main/settings';
import { addDoc, CollectionReference, DocumentData, getDocs, setDoc } from 'firebase/firestore';

export class UserFirebaseStore implements IUserFirebaseStore {
  private storage: string;
  private user: DocumentData | undefined;
  private fireCollection: CollectionReference<DocumentData>;
  constructor() {
    this.storage = 'users';
    this.fireCollection = fireCollection(this.storage);
  }

  async create(data: User): Promise<{ id: string }> {
    const user = await addDoc(this.fireCollection, data);
    return { id: user.id };
  }
  async getById(id: string): Promise<User> {
    const querySnapshot = await getDocs(this.fireCollection);
    querySnapshot.forEach((doc) => {
      console.log('User -> getById', doc.id, ' => ', doc.data());
    });
    return {
      id: '',
      name: '',
      email: '',
      password: '',
    };
  }
  async getByEmail(email: string): Promise<User | null> {
    return null;
  }
  async delete(id: string): Promise<void> {}
}
