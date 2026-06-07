import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Counter from "../components/Counter/Counter";
import UserList from "../components/UserList/UserList";
import Input from "../components/Input/Input";

export default function Home() {
  return (
    <main
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h1>QA Automation Testing Assignment</h1>

      <Button text="Submit" />

      <Card
        title="RTL + Jest"
        description="Component Testing Demo"
      />

      <Counter />

      <Input
        value=""
        onChange={() => {}}
        placeholder="Enter Name"
      />

      <UserList />
    </main>
  );
}