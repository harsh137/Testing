import { useState } from "react";
import {
  TextField,
  Button,
  Radio,
  FormControlLabel,
  RadioGroup,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import "./App.css";

function App() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
    address: "",
    gender: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { name, email, dob, password, confirmPassword, address, gender, country } = formData;

    if (!name || !email || !dob || !password || !confirmPassword || !address || !gender || !country) {
      setError("All fields are required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      return false;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return false;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }

    setError(""); // Clear error if all validations pass
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      setSuccess("Form submitted successfully.");
      setFormData({
        name: "",
        email: "",
        dob: "",
        password: "",
        confirmPassword: "",
        address: "",
        gender: "",
        country: "",
      });
      setError("");
    } else {
      setSuccess("");
    }
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>HOME PAGE</h1>
      <form onSubmit={handleSubmit} className="form">
        <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Date of Birth" type="date" name="dob" value={formData.dob} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Confirm Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Address" name="address" value={formData.address} onChange={handleChange} fullWidth margin="normal" />

        <RadioGroup row name="gender" value={formData.gender} onChange={handleChange} label="gender">
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>

        <Select name="country" value={formData.country} onChange={handleChange} fullWidth displayEmpty inputProps={{ "aria-label": "country" }} label="Country">
          <MenuItem value="">Select Country</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="Canada">Canada</MenuItem>
          <MenuItem value="UK">UK</MenuItem>
          <MenuItem value="India">India</MenuItem>
        </Select>

        {error && <Typography color="error" role="alert">{error}</Typography>}
        {success && <Typography color="green" role="success">{success}</Typography>}

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
