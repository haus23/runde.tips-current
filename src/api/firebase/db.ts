import {
  getFirestore,
  FirestoreDataConverter,
  collection,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';

import { useEffect, useState } from 'react';
import { app } from './app';

export const db = getFirestore(app);

export interface FirestoreDoc {
  id?: string;
}

const converter = <T extends FirestoreDoc>(): FirestoreDataConverter<T> => ({
  toFirestore: (data: Partial<T>) => {
    const clone = { ...data };
    delete clone.id;
    return clone;
  },
  fromFirestore: (doc) => doc.data() as T,
});

export const dataPoint = <T extends FirestoreDoc>(...path: string[]) =>
  collection(db, path.join('/')).withConverter(converter<T>());

export const getList = async <T extends FirestoreDoc>(
  ...path: string[]
): Promise<T[]> => {
  const snapshot = await getDocs<T>(dataPoint<T>(...path));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const useList = <T extends FirestoreDoc>(...path: string[]): [T[]] => {
  const [list, setList] = useState([] as T[]);

  useEffect(
    () =>
      onSnapshot<T>(dataPoint<T>(...path), (snapshot) => {
        setList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }),
    []
  );

  return [list];
};
