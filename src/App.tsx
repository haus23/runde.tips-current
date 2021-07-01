import React, { useEffect, useState } from 'react';
import { getList, useList } from './api/firebase';
import { Championship } from './api/model';

function App() {
  const [title, setTitle] = useState('');
  const [chList] = useList<Championship>('championships');

  useEffect(() => {
    getList<Championship>('championships').then((chamionships) => {
      console.log(chamionships);
      setTitle(chamionships[0].id);
    });
  }, []);

  return (
    <div>
      <span>runde.tips: {title}</span>
      <table>
        <tbody>
          {chList.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.nr}</td>
              <td>{c.title}</td>
              <td>{c.published ? 'true' : 'false'}</td>
              <td>{c.completed ? 'true' : 'false'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
