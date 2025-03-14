"use client";
import React, { useState } from "react";
import Container from "@/components/Container";

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <Container>
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Add 1</button>
        <button onClick={decrement}>Subtract 1</button>
        <button onClick={reset}>Reset</button>
      </div>
    </Container>
  );
}
