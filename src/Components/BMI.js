import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Grid,
  Paper,
  Link,
} from "@mui/material";

function BMI() {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [msg, setMsg] = useState('');

  const reload = () => {
    setAge('');
    setWeight('');
    setHeight('');
    setBmi('');
    setMsg('');
  };

  const handleCalculations = (e) => {
    e.preventDefault();

    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (weightValue <= 0 || heightValue <= 0) {
      alert("Please enter valid numbers for weight and height");
      return;
    }

    const bmiFormula = (weightValue / ((heightValue / 100) ** 2));
    setBmi(bmiFormula.toFixed(2));

    if (bmiFormula < 18.5) {
      setMsg("You are Underweight!");
    } else if (bmiFormula >= 18.5 && bmiFormula < 25) {
      setMsg("You are Healthy!");
    } else if (bmiFormula >= 25 && bmiFormula < 30) {
      setMsg("You are Overweight!");
    } else {
      setMsg("You are Obese, Please take care of your health.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          BMI Calculator by{" "}
          <Link
            href="https://youtube.com/@code-with-Bharadwaj"
            target="_blank"
            style={{ color: 'orange', textDecoration: 'none' }}
          >
            Bharadwaj
          </Link>
        </Typography>
        <form onSubmit={handleCalculations}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Age"
                type="number"
                fullWidth
                variant="outlined"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Weight (kg)"
                type="number"
                fullWidth
                variant="outlined"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Height (cm)"
                type="number"
                fullWidth
                variant="outlined"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Calculate
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button onClick={reload} variant="outlined" color="secondary" fullWidth>
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>

        <Box mt={4}>
          <Typography variant="h6">Results</Typography>
          {age && <Typography>Age: {age}</Typography>}
          {bmi && <Typography>Your BMI is: {bmi}</Typography>}
          {msg && <Typography>{msg}</Typography>}
        </Box>
      </Paper>

      {/* Footer */}
      <Box mt={4} textAlign="center">
        <Typography variant="body2">
          Copyrights reserved by{" "}
          <Link
            href="https://youtube.com/@code-with-Bharadwaj"
            target="_blank"
            style={{ color: 'orange', textDecoration: 'none' }}
          >
            Bharadwaj
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default BMI;
