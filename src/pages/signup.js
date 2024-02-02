import React, { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    // Here you can add logic to handle form submission, e.g., sending data to backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card
        sx={{
          backgroundColor: "#BBE2EC",
          width: "300px",
          padding: "16px",
          margin: "0 auto",
          marginTop: "100px",
          boxShadow: 1,
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          style={{ color: "black", fontWeight: "bold", marginBottom: "16px" }}
        >
          Signup
        </Typography>

        <Stack spacing={2} marginBottom={2}>
          <TextField
            variant="outlined"
            label="Username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </Stack>

        <Stack spacing={2} marginBottom={2}>
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </Stack>

        <Stack spacing={2} marginBottom={2}>
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </Stack>

        <Button variant="contained" type="submit">
          Signup
        </Button>
      </Card>
    </form>
  );
};
