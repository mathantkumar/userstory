import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import JobCard from "./JobCard";
import Filter from "./Filter";
import { fetchJobs } from "../store/actions/jobActions";
import { useDispatch, useSelector } from "react-redux";

const JobList = () => {
  const [filters, setFilters] = useState({});
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const [offset, setOffset] = useState(0);
  console.log(jobs);

  useEffect(() => {
    const filterWithLimit = { ...filters, offset: offset };
    fetchJobs(filterWithLimit, dispatch);
  }, []);

  const handleFilterChange = (newFilters) => {
    const filterWithLimit = { ...newFilters, offset: 0 };
    setFilters(filterWithLimit);
    fetchJobs(filterWithLimit, dispatch);
  };

  // const handleLoadMore = () => {
  //   const filterWithLimit = {
  //     ...filters,
  //     offset: offset + 100,
  //   };
  //   setOffset(offset + 100);
  //   fetchJobs(filterWithLimit, dispatch);
  // };

  return (
    <Grid md={9}>
      <Grid item xs={12} md={12}>
        <Filter onFilter={handleFilterChange} />
      </Grid>
      <Grid container spacing={2} style={{ marginTop: "50px" }}>
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p style={{ textAlign: "center" }}>Loading..</p>
        )}
      </Grid>
      {/* <button
        onClick={handleLoadMore}
        disabled={loading}
        style={{ margin: "50px" }}
      >
        {loading ? "Loading..." : "Load More"}
      </button> */}
    </Grid>
  );
};

export default JobList;
