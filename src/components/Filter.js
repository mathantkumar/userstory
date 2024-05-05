import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Select, Input } from "antd";

const Filter = ({ onFilter }) => {
  const [minExperience, setMinExperience] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");
  const [minBasePay, setMinBasePay] = useState("");
  const [companySize, setCompanySize] = useState("");

  const handleFilter = () => {
    const filters = {
      minExperience,
      company,
      location,
      role,
      minBasePay,
      companySize,
    };
    onFilter(filters);
  };
  const options = [];
  for (let i = 2; i < 5; i++) {
    options.push({
      value: "sample data",
    });
  }
  return (
    <Grid container spacing={2} style={{ marginLeft: "70px" }}>
      <Grid item xs={12} sm={1}>
        <Select
          mode="multiple"
          placeholder="Roles"
          onChange={(value) => setRole(value)}
          style={{
            width: "100%",
          }}
          options={options}
        />
      </Grid>
      <Grid item xs={12} sm={1}>
        <Select
          mode="multiple"
          placeholder="Number of Employees"
          onChange={(value) => setCompanySize(value)}
          style={{
            width: "100%",
          }}
          options={options}
        />
      </Grid>
      <Grid item xs={12} sm={1}>
        <Select
          mode="multiple"
          placeholder="Experience"
          onChange={(value) => setMinExperience(value)}
          style={{
            width: "100%",
          }}
          options={options}
        />
      </Grid>
      <Grid item xs={12} sm={1}>
        <Select
          mode="multiple"
          placeholder="Location"
          onChange={(value) => setLocation(value)}
          style={{
            width: "100%",
          }}
          options={options}
        />
      </Grid>
      <Grid item xs={12} sm={1}>
        <Select
          mode="multiple"
          placeholder="Location"
          onChange={(value) => setMinBasePay(value)}
          style={{
            width: "100%",
          }}
          options={options}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <Input
          placeholder="Search Company"
          onChange={(value) => setCompany(value)}
        />
      </Grid>
    </Grid>
  );
};

export default Filter;
