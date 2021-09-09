import {
  collection,
  doc,
  FirestoreDataConverter,
  getDoc,
  getDocs,
  query,
  Query,
  QueryConstraint,
  WithFieldValue,
} from 'firebase/firestore';
import { db } from '../firebase';
import { ModelBase } from './model-base';

const converterFactory = <
  T extends ModelBase
>(): FirestoreDataConverter<T> => ({
  toFirestore: (modelObject: WithFieldValue<T>) => {
    const { id, ...doc } = modelObject;
    return doc;
  },
  fromFirestore: (snapshot, options) =>
    ({ id: snapshot.id, ...snapshot.data(options) } as T),
});

export const collectionFetcher =
  <T extends ModelBase>(path: string, ...constraints: QueryConstraint[]) =>
  async () => {
    let q: Query<T> = query(
      collection(db, path).withConverter(converterFactory<T>()),
      ...constraints
    );
    const snapshot = await getDocs(q as Query<T>);
    return snapshot.docs.map((doc) => doc.data());
  };

export const firstOfcollectionFetcher =
  <T extends ModelBase>(path: string, ...constraints: QueryConstraint[]) =>
  async () => {
    let q: Query<T> = query(
      collection(db, path).withConverter(converterFactory<T>()),
      ...constraints
    );
    const snapshot = await getDocs(q as Query<T>);
    return snapshot.docs[0].data();
  };

export const docFetcher =
  <T extends ModelBase>(path: string) =>
  async () => {
    let docRef = doc(db, path).withConverter(converterFactory<T>());
    const snapshot = await getDoc(docRef);
    return snapshot.data();
  };
