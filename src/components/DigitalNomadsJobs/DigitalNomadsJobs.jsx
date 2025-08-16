import React from "react";

// ReactJobBoardPage.jsx
// A single-file React component (default export) that renders a responsive
// job board page for remote React.js roles. Built with Tailwind CSS utility classes.
// Drop this file into a Vite/CRA/Next project and ensure Tailwind is configured.

 export default function ReactJobBoardPage() {
 
  return (
    <div className="main-content container">
          <h1>Top Digital Nomad Job Boards</h1>
          <ul className="job-sites">
            <li><a href="https://weworkremotely.com" >We Work Remotely</a> â€“ One of the largest platforms for remote jobs worldwide.</li>
            <li><a href="https://remoteok.com" >Remote OK</a> â€“ Remote jobs in tech, marketing, and design.</li>
            <li><a href="https://flexjobs.com" >FlexJobs</a> â€“ High-quality remote jobs, with a focus on work-life balance.</li>
            <li><a href="https://remotive.io" >Remotive</a> â€“ Community-driven job board for remote tech and startup roles.</li>
            <li><a href="https://workingnomads.co" >Working Nomads</a> â€“ Curated remote jobs for digital nomads.</li>
            <li><a href="https://jobspresso.co" >Jobspresso</a> â€“ Remote jobs in tech, marketing, customer support.</li>
            <li><a href="https://hubstaff.com/jobs" >Hubstaff Talent</a> â€“ Free resource for companies to find remote freelancers.</li>
            <li><a href="https://angel.co/jobs" >AngelList Talent (Wellfound)</a> â€“ Startups offering remote roles in tech, ops, product.</li>
            <li><a href="https://outsourcely.com" >Outsourcely</a> â€“ Direct hire platform for remote teams.</li>
            <li><a href="https://toptal.com" >Toptal</a> â€“ Exclusive network for top freelancers in software, finance, design.</li>
            <li><a href="https://freelancer.com" >Freelancer.com</a> â€“ Freelance marketplace for global clients.</li>
            <li><a href="https://upwork.com" >Upwork</a> â€“ One of the most popular platforms for remote freelancing work.</li>
            <li><a href="https://peopleperhour.com" >PeoplePerHour</a> â€“ UK-based platform for freelancers and clients.</li>
            <li><a href="https://guru.com" >Guru</a> â€“ Global freelance platform for developers, designers, writers.</li>
          </ul>
        </div> 
  );
}
