import "./App.css";
import { LoginForm } from "./pages/Loginform";
import { Signup } from "./pages/signup";
import { Stack, Typography } from "@mui/material";
function App() {
  return (
    <Stack direction={"row"} spacing={4} className="App">
      <LoginForm />
      <Signup></Signup>
    </Stack>
  );
}

export default App;
