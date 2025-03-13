"use client";
import Container from "@/components/Container";
import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <button onClick={() => setCount(a => a + 1)}>Add 1</button>
      <button onClick={() => setCount(a => a - 1)}>Subtract 1</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <h1>{count}</h1>
    </Container>
  );
}
