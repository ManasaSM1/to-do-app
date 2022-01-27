import * as React from "react";
import Typography from "@mui/material/Typography";

export function About() {
  return (
    <Typography paragraph>
      <h2>About the App:</h2>
      <p>
        To-do app was built to simplify and organise your tasks. It helps in
        easy maintenance and grouping of all your daily tasks. <span>Have fun
        organising!</span>
      </p>
      <p>
        This app was developed by Mr. Abhishek Sateesh Gaonkar aka ABdevs29, an
        aspiring Full Stack developer.
      </p>
      <h4>Tech Stack:</h4>
      <ul>
        <li>React JS</li>
        <li>Material UI</li>
        <li>Mock API</li>
      </ul>
      <h4>Socials</h4>
      <ul>
        <li>
          <a
            href="https://twitter.com/ABdevs29"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/abdevs29/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </Typography>
  );
}