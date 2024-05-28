import React, { useState } from "react";

export default function User({ name }) {
  const [count, setcount] = useState(0);
  return (
    <div className="border-2 border-gray-950 mt-12">
      <p>Name : {name}</p>
      <p>count: {count}</p>
      <button
        onClick={() => {
          setcount((prevCount) => {
           return prevCount + 1;
          });
        }}
      >
        +1
      </button>
      <h1>this is user functional components</h1>
      <h2>hyy i am top rated personn in the staf</h2>
    </div>
  );
}
