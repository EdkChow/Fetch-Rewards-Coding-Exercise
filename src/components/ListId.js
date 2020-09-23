import React from 'react';
import Items from './Items';

const ListId = ({ items, loaded }) => {
  if (loaded) {
    // filter items where name is blank or null
    const filteredItems = items.filter((ele) => ele.name !== '' && ele.name !== null);
    const listIds = filteredItems.map((ele) => ele.listId);
    // find all unique listIds
    const uniqueListIds = [...new Set(listIds)].sort();

    const sortedItems = {};

    uniqueListIds.forEach((listId) => {
      sortedItems[listId] = [];
      sortedItems[listId].push(
        <Items key={listId} filteredItems={filteredItems} listId={listId} />,
      );
    });

    const uniqueListId = uniqueListIds.map((id) => (
      <div key={id}>
        <h3>
          List ID: {id}
        </h3>
        {sortedItems[id]}
      </div>
    ));

    return (
      <div className="flex">
        {uniqueListId}
      </div>
    );
  }

  return (
    <div>
      Loading Data...
    </div>
  );
};

export default ListId;
