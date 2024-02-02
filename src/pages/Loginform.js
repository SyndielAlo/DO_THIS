import { Stack, Typography, Card, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom";
export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    setUsername("");
    setPassword("");
  };

  const history = useHistory();

  return (
    <form onSubmit={handleSubmit}>
      <Card
        sx={{
          backgroundColor: "#ADBC9F",
          height: "410px",
          width: "410px",
          padding: "16px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          marginLeft: "550px",
          border: "2px solid #12372A",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          style={{ color: "White", fontWeight: "bold", marginTop: "50px" }}
        >
          Welcome!
        </Typography>

        <Stack spacing={4} marginLeft={9} marginBottom={2} marginTop={5}>
          <Stack spacing={2}>
            <TextField
              variant="outlined"
              size="small"
              width="50px"
              label="Username"
              value={username}
              onChange={handleUsernameChange}
              sx={{ width: "280px", backgroundColor: "White" }}
              required
            />
          </Stack>
        </Stack>

        <Stack spacing={4} marginLeft={9} marginBottom={2}>
          <Stack spacing={2}>
            <TextField
              variant="outlined"
              size="small"
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              sx={{ width: "280px", backgroundColor: "White" }}
              required
            />
          </Stack>
        </Stack>

        <Button variant="contained" type="submit" sx={{ fontStyle: "bold" }}>
          Submit
        </Button>

        <Stack spacing={3} my={2} marginBottom={6}>
          <Button
            variant="text"
            sx={{ fontSize: "12px", color: "#FFF" }}
            onClick={() => history.push("/signup")}
          >
            Create Account
          </Button>
        </Stack>
      </Card>
    </form>
  );
};
