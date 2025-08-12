import React, { useState, useMemo } from "react";

// ReactJobBoardPage.jsx
// A single-file React component (default export) that renders a responsive
// job board page for remote React.js roles. Built with Tailwind CSS utility classes.
// Drop this file into a Vite/CRA/Next project and ensure Tailwind is configured.

export default function ReactJobBoardPage() {
  const initialJobs = [
    {
      id: 1,
      company: "Globetrotter Labs",
      title: "Senior React Esngineer",
      location: "Remote (Anywhere)",
      type: "Full-time",
      tags: ["React", "TypeScript", "Remote"],
      salary: "USD 90k-130k",
      posted: "3 days ago",
      description:
        "Build user-facing features for an AI travel platform. Strong React + hooks + testing experience.",
    },
    {
      id: 2,
      company: "NomadWorks",
      title: "Frontend React Developer (Contract)",
      location: "Remote (UTC-5 to UTC+3 preferred)",
      type: "Contract",
      tags: ["React", "Redux", "Tailwind"],
      salary: "USD 40-60/hr",
      posted: "1 week ago",
      description: "Short-term contract to ship a booking UI. Good for digital nomads.",
    },
    {
      id: 3,
      company: "TravelJoy",
      title: "React Native Engineer",
      location: "Remote",
      type: "Full-time",
      tags: ["React Native", "React", "Mobile"],
      salary: "USD 80k-110k",
      posted: "2 days ago",
      description: "Work on mobile-first experiences for travellers worldwide.",
    },
    // add more mock jobs as needed
  ];

  const [jobs] = useState(initialJobs);
  const [query, setQuery] = useState("");
  const [filterType, setFilterType] = useState("Any");
  const [selectedTag, setSelectedTag] = useState(null);

  const allTags = useMemo(() => {
    const s = new Set();
    jobs.forEach((j) => j.tags.forEach((t) => s.add(t)));
    return Array.from(s);
  }, [jobs]);

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const matchesQuery =
        query.trim() === "" ||
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase()) ||
        job.tags.join(" ").toLowerCase().includes(query.toLowerCase());

      const matchesType = filterType === "Any" || job.type === filterType;
      const matchesTag = !selectedTag || job.tags.includes(selectedTag);
      return matchesQuery && matchesType && matchesTag;
    });
  }, [jobs, query, filterType, selectedTag]);

  return (
    <div className="max-w-6xl mx-auto p-4">dijo</div>
  );
}
