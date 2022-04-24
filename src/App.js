import Container from "@mui/material/Container";
import Todo from "./components/Todo";
function App() {
  return (
    <Container>
      <Todo title="Esmaeil Saleh" text="Master ReactJS" />
      <Todo
        title="Fatemeh Aslani Rokh"
        text="Super charge Your abilite createing reactApp."
      />
    </Container>
  );
}

export default App;
