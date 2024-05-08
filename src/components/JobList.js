import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import JobCard from "./JobCard";
import Filter from "./Filter";
import { fetchJobs } from "../store/actions/jobActions";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../components/InfiniteScroll";
import InfiniteScroll from "../components/InfiniteScroll";

const JobList = () => {
  const [filters, setFilters] = useState({});
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const [offset, setOffset] = useState(0);
  const hasMore = useSelector((state) => state.jobs.hasMore);
  console.log(jobs);

  useEffect(() => {
    const filterWithLimit = { ...filters, offset: offset };
    fetchJobs(filterWithLimit, dispatch);
  }, []);

  const loadMoreJobs = () => {
    dispatch(fetchJobs()); // Dispatch the fetchJobs action
  };

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

  useEffect(() => {
    // Function to handle scrolling and fetch more jobs when user reaches the bottom
    const handleScroll = () => {
      // Calculate scroll positions and window dimensions
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.offsetHeight;
      const scrollTop =
        document.documentElement.scrollTop || window.pageYOffset;

      // Determine if user has scrolled to the bottom
      if (windowHeight + scrollTop >= documentHeight) {
        // Fetch next set of data when user reaches the bottom of the page
        fetchJobs(filters, dispatch);
      }
    };

    // Add scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchJobs, filters, dispatch]);
  return (
    <Grid md={12}>
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
      {hasMore && (
        <InfiniteScroll
          dataLength={jobs.length}
          next={loadMoreJobs}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<p>No more items</p>}
          scrollThreshold={0.9}
        ></InfiniteScroll>
      )}
    </Grid>
  );
};

export default JobList;
