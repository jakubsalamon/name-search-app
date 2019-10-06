import React, { useState } from 'react';
import Main from './components/Main';
import { dataPicker } from './service/helpers.js';
import { getXhr } from './service/apiClient.js';

function App() {

  const [currentTable, setCurrentTable] = useState();
  console.log(currentTable);



  if (!currentTable) {
    getXhr().then(res => setCurrentTable(res));
  }

  const myDataTable = dataPicker(currentTable);
  console.log(myDataTable);
  return (
    <Main users={myDataTable}></Main>
  );
}

export default App;
