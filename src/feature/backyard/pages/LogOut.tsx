import React from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../../common/hooks';

export function LogOut() {
  const { logOut } = useAuth();
  const history = useHistory();
  logOut().then(() => history.push('/'));

  return <></>;
}
