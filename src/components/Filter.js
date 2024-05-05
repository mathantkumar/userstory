import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Select, Input } from "antd";
import {
  Location,
  MinBasePay,
  MinExperience,
  NumberofEmployees,
  Roles,
} from "../mock/mockData";
const Filter = ({ onFilter }) => {
  const [minExperience, setMinExperience] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");
  const [minBasePay, setMinBasePay] = useState("");
  const [companySize, setCompanySize] = useState("");

  const options = Location.map((location) => ({
    label: location,
    value: location,
  }));

  const optionsMinBasePay = MinBasePay.map((minBasePay) => ({
    label: minBasePay,
    value: minBasePay,
  }));

  const optionsMinExperience = MinExperience.map((minExperience) => ({
    label: minExperience,
    value: minExperience,
  }));

  const optionsNumberofEmployees = NumberofEmployees.map((companySize) => ({
    label: companySize,
    value: companySize,
  }));
  const optionsRoles = Roles.map((companySize) => ({
    label: companySize,
    value: companySize,
  }));

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

  return (
    <Grid container spacing={2} style={{ marginLeft: "70px" }}>
      <Grid item xs={12} sm={1}>
        <Select
          mode="multiple"
          placeholder="Roles"
          onChange={(value) => setRole(value)}
          style={{
            width: 110,
          }}
          options={optionsRoles}
        />
      </Grid>
      <Grid item xs={12} sm={1}>
        <Select
          mode="multiple"
          placeholder="Number of Employees"
          onChange={(value) => setCompanySize(value)}
          style={{
            width: 110,
          }}
          options={optionsNumberofEmployees}
        />
      </Grid>
      <Grid item xs={12} sm={1} style={{ maxWidth: "50%" }}>
        <Select
          mode="multiple"
          placeholder="Experience"
          onChange={(value) => setMinExperience(value)}
          style={{
            width: 150,
          }}
          options={optionsMinExperience}
        />
      </Grid>
      <Grid item xs={12} sm={1} style={{ maxWidth: "50%" }}>
        <Select
          mode="multiple"
          placeholder="Location"
          onChange={(value) => setLocation(value)}
          style={{
            width: 150,
          }}
          options={options}
        />
      </Grid>
      <Grid item xs={12} sm={1} style={{ maxWidth: "50%" }}>
        <Select
          mode="multiple"
          placeholder="Minimum Pay Salary"
          onChange={(value) => setMinBasePay(value)}
          style={{
            width: "100%",
            marginRight: 110,
          }}
          options={optionsMinBasePay}
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
