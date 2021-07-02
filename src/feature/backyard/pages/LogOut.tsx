import React from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../../common/hooks';

export function LogOut() {
  const { signOut } = useAuth();
  const history = useHistory();
  signOut().then(() => history.push('/'));

  return <></>;
}
