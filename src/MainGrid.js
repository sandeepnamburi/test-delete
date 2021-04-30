import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  MenuItem,
  Paper,
  Select,
  TextField
} from "@material-ui/core";

const MainGrid = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [type, setType] = useState("syntax");
  const [finaltype, setfinalType] = useState("");
  return (
    <Grid container spacing={10} className="grid">
      <Grid item xs={6} className="input-box">
        <label className="label"> HELP </label>
        <TextField
          placeholder="Type your text here"
          variant="outlined"
          multiline
          value={input}
          rows={6}
          fullWidth={true}
          onChange={(e) => setInput(e.target.value)}
        />
      </Grid>
      <Grid item xs={4} className="grid_item">
        <label className="label"> Text Analysis Type </label>
        <Select
          fullWidth={true}
          variant="outlined"
          defaultValue={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
          className="grid_item"
        >
          <MenuItem value={"sentiment"}>Sentiment</MenuItem>
          <MenuItem value={"language"}>Language</MenuItem>
          <MenuItem value={"entity"}>Entity</MenuItem>
          <MenuItem value={"key phrases"}>Key Phrases</MenuItem>
          <MenuItem value={"topics"}>Topics</MenuItem>
          <MenuItem value={"syntax"}>Syntax</MenuItem>
        </Select>

        <button
          className="button"
          onClick={() => {
            setResult(input);
            setfinalType(type);
          }}
        >
          SUBMIT
        </button>
      </Grid>
      <Grid item xs={12} className="grid_item">
        <label className="label"> Result </label>
        <br />
        <Container className="result">
          {"Input: " + result}
          <br />
          {" Type: " + finaltype}
        </Container>
      </Grid>
    </Grid>
  );
};
export default MainGrid;
