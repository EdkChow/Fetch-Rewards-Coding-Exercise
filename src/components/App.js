import React, { useState, useEffect } from 'react';
import ListId from './ListId';

const App = () => {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // fetch data on component mount
  useEffect(() => {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://fetch-hiring.s3.amazonaws.com/hiring.json';
    fetch(proxyurl + url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoaded(true);
      })
      .catch((err) => console.log('error fetching items: ', err));
  }, []);

  return (
    <div>
      <h1>Fetch-Rewards</h1>
      <ListId items={items} loaded={loaded} />
    </div>
  );
};

export default App;
