import { DocumentReference } from 'firebase/firestore';
import { ModelBase } from '@/api/db/model-base';

export interface ChampionshipPlayer extends ModelBase {
  id: string;
  playerRef: DocumentReference;
  points: number;
}
