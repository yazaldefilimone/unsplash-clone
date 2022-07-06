import { env } from '@/shared/env';
import { initializeApp } from 'firebase/app';
import { collection, CollectionReference, DocumentData, getFirestore } from 'firebase/firestore';

const settings = env.firebase;

const settingsFirebase = settings;

const fire = initializeApp(settingsFirebase);

export const fireStore = getFirestore(fire);
export const fireCollection = function (schema: string): CollectionReference<DocumentData> {
  return collection(fireStore, schema);
};
