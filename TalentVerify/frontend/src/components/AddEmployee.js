import React, { Component } from "react";
import Cookies from "js-cookie";
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Typography, Container, Box } from "@mui/material";

export default class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      company: "",
      name: "",
      department: "",
      role: "",
      dateStarted: "",
      dateLeft: "",
      duties: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchCompanies();
  }

  fetchCompanies() {
    fetch("/companies/")
      .then((response) => {
        console.log('Response status:', response.status); // Debugging log
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched companies:', data); // Debugging log
        this.setState({ companies: data });
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { company, name, department, role, dateStarted, dateLeft, duties } = this.state;

    const employeeData = {
      company,
      name,
      department,
      role,
      date_started: dateStarted ? new Date(dateStarted).toISOString() : null,
      date_left: dateLeft ? new Date(dateLeft).toISOString() : null,
      duties,
    };

    const csrftoken = Cookies.get("csrftoken");

    fetch("http://127.0.0.1:8000/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify(employeeData),
    })
      .then((response) => {
        console.log('Response status:', response.status); // Debugging log
        if (!response.ok) {
          return response.json().then((errData) => {
            throw new Error(`Network response was not ok: ${errData.detail || JSON.stringify(errData)}`);
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Employee added successfully:", data);
        // Reset form or redirect as needed
        this.setState({
          company: "",
          name: "",
          department: "",
          role: "",
          dateStarted: "",
          dateLeft: "",
          duties: "",
        });
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error.message);
      });
  }

  render() {
    return (
      <Container maxWidth="sm">
        <Box mt={4} mb={2}>
          <Typography variant="h4">Add New Employee</Typography>
        </Box>
        <form onSubmit={this.handleSubmit}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Company</InputLabel>
            <Select
              name="company"
              value={this.state.company}
              onChange={this.handleChange}
              required
            >
              <MenuItem value="">
                <em>Select a company</em>
              </MenuItem>
              {this.state.companies.map((company) => (
                <MenuItem key={company.id} value={company.id}>
                  {company.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Department"
            name="department"
            value={this.state.department}
            onChange={this.handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Role"
            name="role"
            value={this.state.role}
            onChange={this.handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Date Started"
            type="date"
            name="dateStarted"
            value={this.state.dateStarted}
            onChange={this.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Date Left"
            type="date"
            name="dateLeft"
            value={this.state.dateLeft}
            onChange={this.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Duties"
            name="duties"
            value={this.state.duties}
            onChange={this.handleChange}
            multiline
            rows={4}
            required
          />
          <Box mt={2}>
            <Button variant="contained" color="primary" type="submit">
              Add Employee
            </Button>
          </Box>
        </form>
      </Container>
    );
  }
}
