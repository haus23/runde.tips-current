import { FirestoreDoc } from '../firebase';

export interface Championship extends FirestoreDoc {
  id: string;
  title: string;
  nr: number;
  published: boolean;
  completed: boolean;
}
