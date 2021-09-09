import { ModelBase } from '@/api/db/model-base';

export interface Player extends ModelBase {
  id: string;
  name: string;
  email: string;
}
