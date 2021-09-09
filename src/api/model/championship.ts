import { ModelBase } from '@/api/db/model-base';

export interface Championship extends ModelBase {
  id: string;
  title: string;
  nr: number;
  published: boolean;
  completed: boolean;
}
