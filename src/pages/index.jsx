"use client";

import { useState } from "react";

import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Counter from "../components/Counter/Counter";
import UserList from "../components/UserList/UserList";
import Input from "../components/Input/Input";

export default function Home() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = () => {
    setSubmitted(name);
  };

  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
      <h1>
        QA Automation Testing Suite
      </h1>

      <Card
        title="Jest + RTL Testing"
        description="Automated component testing demonstration."
      />

      <h2>User Input Demo</h2>

      <Input
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        placeholder="Enter Name"
      />

      <br />
      <br />

      <Button
        text="Submit"
        onClick={handleSubmit}
      />

      {submitted && (
        <p>
          Submitted User: {submitted}
        </p>
      )}

      <h2>Counter Testing Demo</h2>

      <Counter />

      <h2>API Mocking Example</h2>

      <UserList />
    </main>
  );
}