import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fooditems from './components/Fooditems';
import Container from './components/Container';
import Foodinput from './components/Foodinput';

const App = () => {
 

  let [foodItems, setFoodItems] = useState([]);
  let [buttonColor, setButtonColor] = useState([]);

  let emptyMessage = foodItems.length === 0 ? <h2>I am Hungry</h2> : null;

  let onBuyButton = (item) => {
    let newItem = [...buttonColor, item];
    setButtonColor(newItem);
  };

  return (
    <>
      <Container>
        <h1 style={{ textAlign: 'center', color: 'blue' }}>Healthy Food</h1>
        <Foodinput
          onEnterFunction={(event) => {
            if (event.key === 'Enter') {
              let newFoodItem = event.target.value;
              event.target.value = '';
              let newItem = [...foodItems, newFoodItem];
              setFoodItems(newItem);
            }
          }}
        />
        {emptyMessage}

        <Fooditems items={foodItems} boughtItems={buttonColor} onClickEvent={onBuyButton} />
      </Container>
    </>
  );
};

export default App;
