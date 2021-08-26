import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { fohState } from '../state';

export const useFohData = () => {
  const [data, setData] = useRecoilState(fohState);

  useEffect(() => {
    setTimeout(() => {
      setData({ isLoading: false });
    }, 4000);
  }, [setData]);

  return {
    isLoading: data.isLoading,
  };
};
