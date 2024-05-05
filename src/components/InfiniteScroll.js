import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      // Replace the URL with your API endpoint
      const response = await axios.get(
        "https://api.weekday.technology/adhoc/getSampleJdJSON"
      );
      setData((prevData) => [...prevData, ...response.data]); // Append new data to existing data
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    fetchData();
  };

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={handleLoadMore} disabled={loading}>
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}

export default App;
