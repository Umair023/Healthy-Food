import React from 'react';
import moduleCSS from './Fooditems.module.css';

const Fooditems = (props) => {
  const { items, boughtItems, onClickEvent } = props;

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className={`${moduleCSS.moduleUL} list-group-item
           ${boughtItems.includes(item) ? 'active' : ''}`}>
            {item}
            <button className={`btn btn-primary ${moduleCSS.button}`} onClick={() => onClickEvent(item)}>
              Buy
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Fooditems;
