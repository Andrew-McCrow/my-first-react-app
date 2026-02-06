import { useState } from "react";

function App2() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") && <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}


function ListItem(props) {
  return <li>{props.animal}</li>
}




// React exercise: Create a button component that displays a count of how many times it has been clicked.

function MyButton({ count, onClick }) {

return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function App3() {

// State to keep track of the count - shared by both buttons - passed down as props
const [count, setCount] = useState(0);

function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
    </div>
  );
}


export { App2, App3 };