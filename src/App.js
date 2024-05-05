import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import JobList from "./components/JobList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h3 style={{ marginLeft: "70px" }}>Search Jobs</h3>
        </header>
        <main>
          <JobList />
        </main>
      </div>
    </Provider>
  );
}

export default App;
