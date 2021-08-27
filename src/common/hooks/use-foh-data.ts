import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useList } from '../../api/firebase';
import { Championship } from '../../api/model';
import { fohState } from '../state';

export const useFohData = () => {
  const [data, setData] = useRecoilState(fohState);
  const [championships] = useList<Championship>('championships');

  useEffect(() => {
    const current = championships
      .filter((c) => c.published)
      .sort((a, b) => b.nr - a.nr)[0];
    setData({
      isLoading: typeof current === 'undefined',
      championship: current,
    });
  }, [championships, setData]);

  return data;
};
