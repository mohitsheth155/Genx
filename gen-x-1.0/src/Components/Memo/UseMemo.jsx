import React, { useState, useMemo } from 'react';

function ExpensiveComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const items = ['apple', 'banana', 'grape', 'orange', 'watermelon', 'blueberry', 'mango'];

  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [items, searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    
  };
  console.log("@@@ searchTerm" , searchTerm);

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search for a fruit..." 
        value={searchTerm} 
        onChange={handleChange} 
      />
      <ul>
        {filteredItems.map((item, index) => (
          <h2 key={index}>{ searchTerm === item ? item : ""}</h2>
        ))}
      </ul>
     
    </div>
  );
}

export default ExpensiveComponent;
