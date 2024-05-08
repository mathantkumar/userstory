import React, { useState, useEffect } from "react";
import axios from "axios";

function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // Track current page

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.weekday.technology/adhoc/getSampleJdJSON?page=${page}`
      );
      setData((prevData) => [...prevData, ...response.data]);
      setPage((prevPage) => prevPage + 1); // Increment page after fetching
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Add and remove event listener on mount and unmount

  useEffect(() => {
    fetchData(); // Fetch initial data
  }, []); // Run once on mount

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default InfiniteScroll;
