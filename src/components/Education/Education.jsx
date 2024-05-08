import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import "./Education.css";
import tenth from "../../img/tenth.jpeg";
import twelve from "../../img/twelve.jpeg";
import graduate from "../../img/graduate.jpeg";

function Education() {
  const [key, setKey] = useState(0); // Key to force remounting of component
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true when the component mounts
    setMounted(true);
  }, [key]); // Listen for changes in the key to remount the component

  useEffect(() => {
    // Reset component when location changes
    resetComponent();
  }, []); // Listen for changes in the location pathname

  // Function to reset the key and trigger remounting of the component
  const resetComponent = () => {
    setKey(prevKey => prevKey + 1);
  };

  return (
    <div id="education" className={mounted ? 'animate' : ''}>
      <h1>Education</h1>

      <div className="timeline">
        <div className="container left-container">
          <img src={tenth} alt="" />
          <div className="text-box">
            <h2>SSLC</h2>
            <small>2016- 2017</small>
            <p>I have Completed SSLC from Little Flower Mtariculation School with an aggregate 95%.</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <img src={twelve} alt="" />
          <div className="text-box">
            <h2>HSC</h2>
            <small>2017- 2019</small>
            <p>I have Completed HSC from SKV Mtariculation Higher Secondary School with an aggregate 75%.</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="container left-container">
          <img src={graduate} alt="" />
          <div className="text-box">
            <h2>BCA - Bachelor of Computer Applications</h2>
            <small>2019- 2022</small>
            <p>I have Completed BCA from Sree Abiraami Arts and Science College for Women with an aggregate 85%.</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Education;
