import { DocumentData } from 'firebase/firestore';

export interface ModelBase extends DocumentData {
  id: string;
}
