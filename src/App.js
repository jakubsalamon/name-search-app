import React from 'react';
import Main from './components/Main';
import { dataPicker } from './service/helpers.js';
import { getXhr } from './service/apiClient.js';

function App() {

  const usersTable = getXhr();
  const myDataTable = dataPicker(usersTable);

  return (
    <Main users={myDataTable}></Main>
  );
}

export default App;
