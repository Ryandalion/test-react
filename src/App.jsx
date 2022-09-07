import React, { memo, useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import moment from 'moment';
import './style.css';
// Create a search to filter api results
// 1. Ping API and get all data
// 2. Create search bar and query search and display results

const App = () => {
  const [apiResults, setApiResults] = useState([]);

  const getApiData = () => {
    fetch('https://randomuser.me/api/?results=50')
      .then((res) => res.json())
      .then((result) => {
        setApiResults(result.results);
      });
  };

  useEffect(() => {
    getApiData();
  }, []);

  console.log(apiResults);
  return (
    <div>
      {Object.keys(apiResults).forEach((key) => {
        console.log(apiResults[key]);
        return <div>{apiResults[key]}</div>;
      })}
    </div>
  );
};

export default App;
