import { useState } from 'react';

export default function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson((person) => ({ ...person, age: person.age + 1 }));
    setPerson((person) => ({ ...person, age: person.age + 1 }));
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  return (
    <>
      <label htmlFor="firstName">First name</label>
      <input
      id="firstName"
      type="text"
      value={firstNameValue}
      onChange={(event) => setFirstNameValue(event.target.value)}
      />
      <label htmlFor="lastName">Last name</label>
      <input
      id="lastName"
      type="text"
      value={lastNameValue}
      onChange={(event) => setLastNameValue(event.target.value)}
      />
      <h1>{`${firstNameValue} ${lastNameValue}`}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}