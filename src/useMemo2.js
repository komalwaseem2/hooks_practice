import React, { useState, useMemo } from 'react';

export default function Sorter({ data }) {
  const [sortBy, setSortBy] = useState('');

  const sortedData = useMemo(() => {

    switch (sortBy) {

      case 'name':
        return data.slice().sort((a, b) => {
          if (a.name < b.name) 
            return -1;
          if (a.name > b.name) 
            return 1;
          return 0;
        });

      case 'age':
        return data.slice().sort((a, b) => a.age - b.age);

      default:
        return data;
    }

  }, [data, sortBy]);

  return (
    <div>
      <div>
        Sort by:
        <button onClick={() => setSortBy('name')}>Name</button>
        <button onClick={() => setSortBy('age')}>Age</button>
      </div>
      <ul>
        {sortedData.map(item => (
          <li>Name: {item.name} - Age: {item.age}</li>
        ))}
      </ul>
    </div>
  );
}
