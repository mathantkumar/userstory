import "@fontsource/lexend";
import React from "react";
import { Grid } from "@material-ui/core";
import { Avatar } from "antd";
import JobDescription from "./JobDescription";
import { Card, Button } from "antd";
import { Typography } from "antd";

const { Text } = Typography;
const JobCard = ({ job }) => {
  const {
    companyName,
    jdLink,
    jobDetailsFromCompany,
    location,
    minExp,
    jobRole,
    minJdSalary,
    maxJdSalary,
    logoUrl,
  } = job;

  return (
    <Grid item xs={12} sm={12} md={3} style={{ marginLeft: "80px" }}>
      <Card>
        <Grid container direction="row" spacing={1}>
          <Grid item>
            <img src={logoUrl} width={50} height={50} />
          </Grid>
          <Grid item direction="column" style={{ display: "flex" }}>
            <Text color="textSecondary" gutterBottom>
              {companyName}
            </Text>
            <Text color="textSecondary" gutterBottom>
              {jobRole}
            </Text>
            <Text color="textSecondary" gutterBottom>
              {location}
            </Text>
          </Grid>
        </Grid>
        <Grid container direction="column" style={{ fontFamily: "lexend" }}>
          <Text color="textSecondary" gutterBottom>
            Estimated Salary: ₹{minJdSalary || 0} - {maxJdSalary} ✅
          </Text>
          <Text variant="body2" component="h3">
            <Text style={{ fontWeight: "700" }}>About Company</Text>
            <br />
            <Text style={{ fontWeight: "700" }}>About Us</Text>
            {<JobDescription text={jobDetailsFromCompany} />}
          </Text>
        </Grid>

        <Text color="gray" gutterBottom>
          Minimum Experience <br />
          <Text>{minExp || 1} years</Text>
        </Text>
        <br />
        <Button
          variant="contained"
          color="primary"
          target="_blank"
          href={jdLink}
          style={{
            backgroundColor: "rgb(85, 239, 196)",
            color: "black",
            width: "230px",
            borderRadius: "10px",
            marginBottom: "5px",
            marginTop: "5px",
          }}
        >
          ⚡️ Easy Apply
        </Button>
        <Button
          variant="contained"
          href={""}
          style={{
            backgroundColor: "rgb(73, 67, 218)",
            color: "white",
            borderRadius: "10px",
            width: "230px",
            padding: "30px",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://assets-global.website-files.com/61766c42e8e50c99a04fbd4b/64e69f71607b05d852db97ae_CPO.jpeg"
          />
          Unlock referral asks
        </Button>
      </Card>
    </Grid>
  );
};

export default JobCard;
