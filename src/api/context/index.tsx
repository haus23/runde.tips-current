import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import React, { createContext, FC, useContext } from 'react';

// Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MSG_SENDER_ID,
  appId: import.meta.env.VITE_FB_APP_ID,
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// Context
type Context = {
  app: FirebaseApp;
  db: Firestore;
};

const ApiContext = createContext<Context | null>(null);

// State
import { RecoilRoot } from 'recoil';

export const useApiContext = (): Context => {
  return useContext(ApiContext)!;
};

export const ApiProvider: FC<{}> = ({ children }) => {
  const initialContext: Context = { app, db };
  return (
    <ApiContext.Provider value={initialContext}>
      <RecoilRoot>{children}</RecoilRoot>
    </ApiContext.Provider>
  );
};
