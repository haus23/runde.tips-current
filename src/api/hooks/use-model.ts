import { DocumentReference } from 'firebase/firestore';
import useSWR from 'swr';
import { ModelBase } from '../db/model-base';
import { docFetcher } from '../db/helper';

export const useModel = <T extends ModelBase>(
  source: string | DocumentReference
) => {
  source = typeof source === 'string' ? source : source.path;
  return useSWR(source, docFetcher<T>(source));
};
