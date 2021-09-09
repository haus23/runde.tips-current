import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '@/api/auth/hooks';

export function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const { signIn } = useAuth();

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    signIn(email, password).then((success) => {
      if (success) {
        history.push('/');
      } else {
        setPassword('');
        setError(true);
      }
    });
  };

  return (
    <div className="flex flex-col justify-center pt-16 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-2xl font-semibold text-gray-900">
          Anmeldung
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="space-y-6"
            action="#"
            method="post"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block sm:text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block sm:text-sm font-medium text-gray-700"
              >
                Passwort
              </label>
              <div className="mt-1">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      {error && (
        <div className="mx-auto mt-4">
          <span className="block text-center text-red-500 font-semibold">
            Fehler bei der Anmeldung!
          </span>
        </div>
      )}
    </div>
  );
}
