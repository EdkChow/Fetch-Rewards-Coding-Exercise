import React from 'react';

const Items = ({ filteredItems, listId }) => {
  // create object with all items associated to each listId
  const sortedListIdObj = {};
  filteredItems.forEach((item) => {
    if (sortedListIdObj[item.listId]) {
      sortedListIdObj[item.listId].push(item.name);
    } else {
      sortedListIdObj[item.listId] = [item.name];
    }
  });

  // alpha-numeric sort
  const sortAlphaNum = (a, b) => {
    const reA = /[^a-zA-Z]/g;
    const reN = /[^0-9]/g;
    const aA = a.replace(reA, '');
    const bA = b.replace(reA, '');
    if (aA === bA) {
      const aN = parseInt(a.replace(reN, ''), 10);
      const bN = parseInt(b.replace(reN, ''), 10);
      if (aN === bN) return 0;
      if (aN > bN) return 1;
      return -1;
    }
    return aA > bA ? 1 : -1;
  };

  // map each item to a list
  const listIDs = Object.keys(sortedListIdObj);
  listIDs.forEach((key) => {
    sortedListIdObj[key] = sortedListIdObj[key]
      .sort(sortAlphaNum)
      .map((item) => (
        <li key={item}>
          {item}
        </li>
      ));
  });

  return (
    <div>
      <ul>
        {sortedListIdObj[listId]}
      </ul>
    </div>
  );
};

export default Items;
