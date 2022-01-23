import React, { useState, useEffect } from 'react';

const App = () => {
  const [name, setName] = useState('Loading...');
  useEffect(() => {
    fetch('/api/getUsername')
      .then((res) => res.json())
      .then((res) => setName(res.username));
  });

  return <div>{name}</div>;
};

export default App;
