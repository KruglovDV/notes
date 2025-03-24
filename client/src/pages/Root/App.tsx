import React, { useEffect, useState } from 'react';
import { http } from '../../api/http';

const getDataFromApi = async () => {
  const res = await http.get<{ data: string }>('/api/data');
  return res.data;
};

function App() {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    (async () => {
      const data = await getDataFromApi();
      setData(data.data);
    })();
  }, []);

  return (
    <div>
      <div>App for monitoring test</div>
      {data && <div data-testid="app-text">{data}</div>}
    </div>
  );
}

export default App;
